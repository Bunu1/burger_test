const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('../controllers');
const PromotionController = controllers.PromotionController;
const Admin = controllers.AdminController;
/*const ProductController = controllers.ProductController;
const MenuController = controllers.MenuController;*/

const promotionRouter = express.Router();
promotionRouter.use(bodyParser.json());


promotionRouter.get('/', function(req, res) {
  PromotionController.getAll(req.query.id, req.query.description, req.query.available)
  .then(function(promo){
  	res.json(promo);
  });

});

promotionRouter.get('/:id', Admin.verifyToken, function(req, res) {
  const promotionId = parseInt(req.params.id);
  const promotion = PromotionController.getById(promotionId);
  const products = ProductController.getAllProducts(promotionId);
  const menus = PromotionController.getAllMenus(promotionId);
  if(promotion !== undefined) {
		res.json({
		    "promotion": promotion,
		    "products": products,
		    "menus": menus
		});
      return;
  }
  res.status(404).end();
});

promotionRouter.post('/', Admin.verifyToken, function(req, res) {
  const description = req.body['description'];
  const prerequisite = req.body['prerequisite'];
  const available = req.body['available'];
  const start_date = req.body['start_date'];
  const end_date = req.body['end_date'];

  if(description === undefined || prerequisite === undefined || available === undefined || start_date === undefined || end_date === undefined) {
    res.status(400).end();
    return;
  }
  if(PromotionController.create(description, prerequisite, available, start_date, end_date)) {
      res.status(201).end();
      return;
  }

  res.status(404).end();
});

promotionRouter.post('/:id', Admin.verifyToken, function (req, res) {
  const promotionId = parseInt(req.params.id);
  const description = req.body['description'];
  const prerequisite = req.body['prerequisite'];
  const available = req.body['available'];
  const start_date = req.body['start_date'];
  const end_date = req.body['end_date'];
  if(description === undefined || prerequisite === undefined || available === undefined || start_date === undefined || end_date === undefined) {
    res.status(400).end();
    return;
  }
  PromotionController.update(promotionId, description, prerequisite, available, start_date, end_date);
  res.status(204).end();
});

promotionRouter.delete('/:id', Admin.verifyToken, function(req, res) {
  const promotionId = parseInt(req.params.id);
  if(PromotionController.delete(promotionId)) {
    res.status(204).end();
    return;
  }
  res.status(404).end();
});


//addToProm
promotionRouter.post('/to/:id', Admin.verifyToken, Admin.verifyToken, function(req, res) {
  const promotionId = parseInt(req.params.id);

  //const produits = req.body['produits'];
  //const menus = req.body['menus'];

  var produits = [
  [1, 10.5],
  [2, 10.1]
  ];

  var menus = [
  [1, 4],
  [2, 5]
  ];

  if(produits === undefined && menus === undefined ) {
    res.status(400).end();
    return;
  }

  for(var i =0; i<produits.length; i++){
  	if(eachProdInfo = ProduitController.get(produits[i][0])){
  		ProduitController.create(
	  		eachProdInfo['name'], 
	  		produits[i][1], 
	  		eachProdInfo['highlight'],
	  		eachProdInfo['category'],
	  		eachProdInfo['available'],
	  		promotionId 
  		);
  	}

  	
  }
  for(var i =0; i<menus.length; i++){
  	if(eachMenuInfo = MenuController.get(menus[i][0])){
		MenuController.create(
	  		eachMenuInfo['name'], 
	  		eachMenuInfo['description'],
	  		eachProdInfo['highlight'],
	  		menus[i][1],
	  		eachProdInfo['available'],
	  		promotionId 
  		);
  	}
  }
	res.status(201).end();
	return;
});

module.exports = promotionRouter;
