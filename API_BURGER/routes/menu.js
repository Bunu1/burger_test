const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('../controllers');

const MenuController = controllers.MenuController;
const Admin = controllers.AdminController;

const menuRouter = express.Router();
menuRouter.use(bodyParser.json());


menuRouter.post('/addMenu', Admin.verifyToken, function(req, res) {
  const name = req.body.name;
  const description = req.body.description;
  const highlight = req.body.highlight;
  const size = req.body.size;
  const available = req.body.available;
  let id_promotion = req.body.id_promotion;
  
  if(name === undefined) {
    res.status(400).end();
    return;
  }
  if(description === undefined) {
    description = "";
  }
  if(highlight === undefined) {
    highlight = 0;
  }
  if(size === undefined || size < 1) {
    res.status(400).end();
    return;
  }
  if(available === undefined) {
    available = 1;
  }
  if(id_promotion === undefined) {
    available = 0;
  }
  
  MenuController.addMenu(name, description, highlight, size, available, id_promotion)
  .then((p) => {
    res.status(201).json(p);
  })
  .catch((err) => {
    console.error(err);
    res.status(500).end();
  });
});

menuRouter.post('/updateMenu', Admin.verifyToken, function(req, res) {
  const id = req.body.id;
  const name = req.body.name;
  const description = req.body.description;
  const highlight = req.body.highlight;
  const size = req.body.size;
  const available = req.body.available;
  const id_promotion = req.body.id_promotion;
  
  if(id === undefined) {
    res.status(400).end();
    return;
  }
  
  MenuController.updateMenu(id, name, description, highlight, size, available, id_promotion)
  .then((p) => {
    res.status(201).json(p);
  })
  .catch((err) => {
    console.error(err);
    res.status(500).end();
  });
});

menuRouter.get('/removeMenu/:id', Admin.verifyToken, function(req, res) {
  const id = parseInt(req.params.id);
  MenuController.removeMenu(id)
  .then((menu) => {
    res.status(201).end();
  })
  .catch((err) => {
    console.error(err);
    res.status(500).end();
  });
});

menuRouter.post('/addProductToMenu', Admin.verifyToken, function(req, res) {
  const id_product = req.body.id_product;
  const id_menu = req.body.id_menu;
  const price = req.body.price;
  const position = req.body.position;
  
  if(id_product === undefined || id_menu === undefined || price === undefined || position === undefined) {
    res.status(400).end();
    return;
  }
  
  MenuController.addProductToMenu(id_product, id_menu, price, position)
  .then((p) => {
    res.status(201).json(p);
  })
  .catch((err) => {
    console.error(err);
    res.status(500).end();
  })
});

menuRouter.post('/removeProductFromMenu', Admin.verifyToken, function(req, res) {
  const id_product = req.body.id_product;
  const id_menu = req.body.id_menu;
  const position = req.body.position;
  
  if(id_product === undefined || id_menu === undefined || position === undefined) {
    res.status(400).end();
    return;
  }
  
  MenuController.removeProductFromMenu(id_product, id_menu, position)
  .then((p) => {
    res.status(201).json(p);
  })
  .catch((err) => {
    console.error(err);
    res.status(500).end();
  })
});

menuRouter.get('/', function(req, res) {
  const limit = req.query.limit ? parseInt(req.query.limit) : undefined;
  const offset = req.query.offset ? parseInt(req.query.offset) : undefined;
  MenuController.findAll(req.query.id, req.query.name, req.query.description, req.query.highlight, req.query.size, req.query.available, req.query.id_promotion, limit, offset)
  .then((menus) => {
    res.json(menus);
  })
  .catch((err) => {
    console.error(err);
    res.status(500).end();
  });
});

menuRouter.get('/:id', function(req, res) {
  const id = parseInt(req.params.id);
  MenuController.findMenu(id)
  .then((menu) => {
    res.json(menu);
  })
  .catch((err) => {
    console.error(err);
    res.status(500).end();
  });
});

menuRouter.post('/findPriceMenu', function(req, res) {
  if( req.body.id_menu === undefined && req.body.id_product === undefined && req.body.position === undefined){
    res.status(400).end();
    return;
  }
  MenuController.findPriceMenu(req.body.id_menu, req.body.id_product, req.body.position)
  .then((menu) => {
    res.json(menu);
  })
  .catch((err) => {
    console.error(err);
    res.status(500).end();
  });
});

menuRouter.get('/detailed/:id', function(req, res) {
  const id = parseInt(req.params.id);
  MenuController.findDetailedMenu(id).then((product) => {
    res.json(product);
  })
  .catch((err) => {
    console.error(err);
    res.status(500).end();;
  });
});

module.exports = menuRouter;
