const ModelIndex = require('../models');
const Promotion = ModelIndex.Promotion;
const Op = ModelIndex.Sequelize.Op;

const PromotionController = function() { };

PromotionController.create = function(description, prerequisite, available, start_date, end_date) {
  return Promotion.create({
    "description": description, 
    "prerequisite": prerequisite,
    "available": available,
    "start_date": start_date,
    "end_date": end_date
  });
};

PromotionController.getById = function(id) {
  return Promotion.find({
  	"where": {
  		"id": id
  	}
  });
};

PromotionController.update = function(id, description, prerequisite, available, start_date, end_date) {
  Promotion.find({
  	"where": {
  		"id": id
  	}
  }).then(function(promotion){
  	if(promotion){
  		promotion.updateAttributes({
  			"description": description, 
		    "prerequisite": prerequisite,
		    "available": available,
		    "start_date": start_date,
		    "end_date": end_date
  		});
  	}
  }).catch(function(err){
  	throw err;
  });

  return 1;
};

PromotionController.delete = function(id) {
  Promotion.find({
  	"where": {
  		"id": id
  	}
  }).then(function(promotion){
  	if(promotion){
  		promotion.updateAttributes({
  			"available": 0
  		});
  	}
  }).catch(function(err){
  	throw err;
  });

  return 1;
};

PromotionController.getAll = function(id, description, available, search, limit, offset) {

  const where = {};
  const options = {raw:true};
  if(id!== undefined){
    where.id = {
      [Op.like]: `${id}%`
    }
  }
  if(description!== undefined){
    where.description = {
      [Op.like]: `${description}%`
    }
  }
  if(available!== undefined){
    where.available = {
      [Op.like]: `${available}%`
    }
  }
  options.where = where;
  if(limit !== undefined) {
    options.limit = limit;
  }
  if(offset !== undefined) {
    options.offset = offset;
  }
  return Promotion.findAll(options);
};


module.exports = PromotionController
