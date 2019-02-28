const ModelIndex = require('../models');
const Menu = ModelIndex.Menu;
const Op = ModelIndex.Sequelize.Op;

const MenuController = function() { };

MenuController.addMenu = function(name, description, highlight, size, available, id_promotion) {
  return Menu.create({
    name: name,
    description: description,
    highlight: highlight,
    size: size,
    available: available,
    id_promotion: id_promotion
  });
};

MenuController.updateMenu = function(id, name, description, highlight, size, available, id_promotion) {
  return MenuController.findMenu(id)
  .then((menu) => {
    if(menu) {
        if(name === undefined) name = menu.name;
        if(description === undefined) description = menu.description;
        if(highlight === undefined) highlight = menu.highlight;
        if(size === undefined) size = menu.size;
        if(available === undefined) available = menu.available;
        if(id_promotion === undefined) id_promotion = menu.id_promotion;
        menu.updateAttributes({
        name: name,
            description: description,
            highlight: highlight,
            size: size,
            available: available,
            id_promotion: id_promotion
        });

        return menu;
    }
  })
  .catch(function(err){
      throw err;
  });
}

MenuController.removeMenu = function(id) {
  return ModelIndex.List_Product.destroy({
    where: {
      id_menu: id
    }
  })
  .then(function() {
    return Menu.destroy({
      where: {
        id: id
      }
    })
  })
}

MenuController.addProductToMenu = function(id_prod, id_menu, price, pos) {
  return MenuController.findMenu(id_menu)
  .then(menu => {
    if(menu.size < pos) {
      return;
    } else {
      return ModelIndex.List_Product.create({
        id_product: id_prod,
        id_menu: id_menu,
        price: price,
        position: pos
      }); 
    }
  });
}

MenuController.removeProductFromMenu = function(id_prod, id_menu, pos) { 
  return ModelIndex.List_Product.destroy({
    where: {
      id_product: id_prod,
      id_menu: id_menu,
      position: pos
    }
  });
}

MenuController.findAll = function(id, name, description, highlight, size, available, id_promotion, limit, offset) {
  const where = {};
	const options = {};
  
	if(id !== undefined){
		where.id = {
			[Op.like]: `${id}%`
		}
	}
	if(name !== undefined){
		where.name = {
			[Op.like]: `${name}%`
		}
	}
	if(description !== undefined){
		where.description = {
			[Op.like]: `${description}%`
		}
	}
	if(highlight !== undefined){
		where.highlight = {
			[Op.like]: `${highlight}%`
		}
	}
	if(size !== undefined){
		where.size = {
			[Op.like]: `${size}%`
		}
	}
	if(available !== undefined){
		where.available = {
			[Op.like]: `${available}%`
		}
	}
  if(id_promotion !== undefined){
		where.id_promotion = {
			[Op.like]: `${id_promotion}%`
		}
	}
	options.where = where;
	if(limit !== undefined){
		options.limit = limit;
	}
	if(offset !== undefined){
		options.offset = offset;
	}
  
  return Menu.findAll(options);
};

MenuController.findMenu = function(id) {
  return Menu.find({
    where: {
      id: id
    }
  })
}

MenuController.findDetailedMenu = function(id) {
    return Menu.findAll({
        raw: true,
        include: [{
            model: ModelIndex.Product,
            include: [{
                model: ModelIndex.Promotion
            }],
            required: true
        }, {
            model: ModelIndex.Promotion
        }],
        where: { id: id }
    })
}

MenuController.findPriceMenu = function(id_menu, id_product, position) {
  return ModelIndex.List_Product.findAll({
      where: {
        id_menu : id_menu,
        id_product : id_product,
        position: position
      }
  });
}

module.exports = MenuController
