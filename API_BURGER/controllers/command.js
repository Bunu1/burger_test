const ModelIndex = require('../models');
const Command = ModelIndex.Command;
var MenuController = require('./menu');
var ProductController = require('./product');
const Op = ModelIndex.Sequelize.Op;

const CommandController = function(){};

CommandController.getAll = function(done, limit, offset){
	const where = {};
	const options = {};
	if(done !== undefined){
		where.done = {
			[Op.like]: `${done}%`
		}
	}
	options.where = where;
	if(limit !== undefined){
		options.limit = limit;
	}
	if(offset !== undefined){
		options.offset = offset;
	}
	return Command.findAll(options);
}

CommandController.getCommand = function(id_command){
	const where = {};
	const options = {};
	if(id_command !== undefined){
		where.id_command = {
			[Op.like]: `${id_command}%`
		}
	}
	options.where = where;
	return ModelIndex.ProductCommand.findAll(options);
}

CommandController.add = function(total,date,commandProduct){

	return Command.create({
		total: total,
		done: 0,
		date: date
	})
	.then(function(command) {
		for(let i = 0; i < commandProduct.length; i++){
			ModelIndex.ProductCommand.create({
		      id_product: commandProduct[i].id_product,
		      id_command: command.dataValues.id,
		      id_menu: commandProduct[i].id_menu
		    });
		}
        return command;
	});
}

CommandController.addInCommand = function(id_command, id_product, id_menu){
	return ModelIndex.ProductCommand.create({
          id_product: id_product,
          id_command: id_command,
          id_menu: id_menu
        });
}

CommandController.update = function(id, total, done, date){
	const options = {}
	if(total !== undefined){
		options.total = total;
	}
	if(done !== undefined){
		options.done = done;
	}
	if(date !== undefined){
		options.date = date;
	}
	return Command.update(options, {returning: true, where: {id: id}});
}

CommandController.delete = function(id){
	return Command.destroy({where: {id: id}})
	.then(function(product){
		ModelIndex.ProductCommand.destroy({where: {id: id}});
	});
}

CommandController.deleteInCommand = function(id_command, id_product){
	return ModelIndex.ProductCommand.destroy({where: {id_product: id_product, id_command: id_command}});
}

module.exports = CommandController;
