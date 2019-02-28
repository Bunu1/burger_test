const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('../controllers');
const CommandController = controllers.CommandController;
const Admin = controllers.AdminController;

const commandRouter = express.Router();
commandRouter.use(bodyParser.json());

commandRouter.get('/', function(req,res){
	const limit = req.query.limit ? parseInt(req.query.limit) : undefined;
	const offset = req.query.offset ? parseInt(req.query.offset) : undefined;
	CommandController.getAll(req.query.done, limit, offset)
	.then((commands) => {
		res.json(commands);
	})
	.catch((err) =>{
		console.log(err);
		res.status(500).end();
	})
});

commandRouter.get('/getCommand', function(req,res){
	if( req.query.id_command === undefined){
		res.status(400).end();
		return;
	}
	CommandController.getCommand(req.query.id_command)
	.then((commands) => {
		res.json(commands);
	})
	.catch((err) =>{
		console.log(err);
		res.status(500).end();
	})
});

commandRouter.post('/add', function(req, res){
	if( req.body.commandProduct === undefined || req.body.total === undefined){
		res.status(400).end();
		return;
	}
	CommandController.add(req.body.total, req.body.date, req.body.commandProduct)
	.then((command) =>{
		res.status(201).json(command);
	})
	.catch((err) =>{
		res.status(500).end();
	})
});

commandRouter.post('/addInCommand', Admin.verifyToken, function(req, res){
	if(req.body.id_command === undefined || req.body.id_product === undefined){
		res.status(400).end();
		return;
	}
	CommandController.addInCommand(req.body.id_command, req.body.id_product, req.body.id_menu)
    .then((ret) => {
        res.status(201).json(ret);
    })
    .catch((err) =>{
		res.status(500).end();
	});
});

commandRouter.post('/update', Admin.verifyToken, function(req, res){
	if(req.body.id === undefined){
		res.status(400).end();
		return;
	}
	CommandController.update(req.body.id, req.body.total, req.body.done, req.body.date)
    .then((rep) => {
        res.status(202).end();
    })
	.catch((err) =>{
		console.log(err);
		res.status(500).end();
	})
});

commandRouter.post('/delete', Admin.verifyToken, function(req, res){
	if(req.body.id_command === undefined){
		res.status(400).end();
		return;
	}
	CommandController.delete(req.body.id_command)
    .then((del) => {
        res.status(200).json(del);
    })
    .catch((err) => {
        res.status(204).end();
    })
});

commandRouter.post('/deleteInCommand', Admin.verifyToken, function(req, res){
	if(req.body.id_command === undefined || req.body.id_product === undefined){
		res.status(400).end();
		return;
	}
	CommandController.deleteInCommand(req.body.id_command, req.body.id_product);
	res.status(204).end();
});

module.exports = commandRouter;