const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('../controllers');
const jwt = require('jsonwebtoken');
const fs = require('fs');


const AdminController = controllers.AdminController;

const adminRouter = express.Router();
adminRouter.use(bodyParser.json());

adminRouter.post('/login', function(req, res) {
  const login = req.body.login;
  const password = req.body.password;
  
  if(login === undefined && password === undefined) {
    res.status(400).end();
    return;
  }
  
  AdminController.login(login, password)
  .then(admn => {
    if(admn) {      
      var token = jwt.sign({admn}, "very_secret_key");
      fs.writeFile(".token", token, function(err) {
				if(err) {
					res.status(500).end();	
				}
				res.status(201).json({ "id": admn.id, "token": token });
			});
    }else{
      res.status(404).end();
    }
  });
});

adminRouter.get('/dc', function(req, res) {
  try {
    fs.statSync('.token');
    fs.unlink('.token', (err) => {
      if (err) {
        res.status(500).end();
      }
			res.status(200).end();
    });
  } catch(err) {
    res.sendStatus(500).end();
  }
});

adminRouter.post('/oui',  AdminController.verifyToken, (req, res) => {
  res.status(200).json({"msg": "test"});  
});

module.exports = adminRouter;
