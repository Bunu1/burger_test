var server = require('../index.js');

var request = require('supertest');

var request = request('http://localhost:8080');

var should = require('should');


describe('Commands' , function () {

    var test_id;
    
    describe('Get by ID', function(){
            
        it('doneIsDoneOnce', function(done) {
            request
                .get('/command/getCommand?id_command=75')
                .expect(200)
                .end(function(err,res){
                  res.body.forEach((el) => {
                      var val = false;
                      if(el.id >= 1) {
                          val = true;
                      } else {
                          val = false;
                      }
                      
                      val.should.equal(true);
                  });
                  done();
                });
        });
    });
    
    describe('Add', function(){
        it('checkAdd', function(done) {
             
             request
                .post('/command/add')
                .set("Content-Type", "application/json")
                .send({
                    "total": 150,
                    "date": "2019-02-28",
                    "commandProduct": [
                        {
                            "id": 57,
                            "id_product": 4,
                            "id_command": 81,
                            "id_menu": null
                        },
                        {
                            "id": 58,
                            "id_product": 4,
                            "id_command": 81,
                            "id_menu": null
                        }
                    ]
                })
                .expect(201)
                .end(function(err,res) {
                    test_id = res.body.id;
                    res.body.total.should.equal(150);
                    res.body.done.should.equal(0);
                    res.body.date.should.equal("2019-02-28T00:00:00.000Z");
                  done();
                });
        });
        
        it('checkError', function(done) {
            request
                .post('/command/add')
                .set("Content-Type", "application/json")
                .send({
                    "date": "2019-02-28",
                    "commandProduct": [
                        {
                            "id": 57,
                            "id_product": 4,
                            "id_command": 81,
                            "id_menu": null
                        },
                        {
                            "id": 58,
                            "id_product": 4,
                            "id_command": 81,
                            "id_menu": null
                        }
                    ]
                })
                .expect(400)
                .end(done);
        });
    });
    
    describe('Add in command', function(){
        it('checkAdd', function(done) {
            request
                .post('/command/addInCommand')
                .set("Content-Type", "application/json")
                .send({
                    "id_product": 4,
                    "id_command": 81,
                    "id_menu": 6
                })
                .expect(201)
                .end(function(err,res) {
                    res.body.id_product.should.equal(4);
                    res.body.id_command.should.equal(81);
                    res.body.id_menu.should.equal(6);
                  done();
                });
        });
    });
    
    describe('Get for update', function(){
        it("update", function(done) {
           request
               .post("/command/update")
               .set("Content-Type", "application/json")
               .send({
                    "id": test_id,
                    "total": 2,
                    "done": 1,
                    "date": "2000-12-31"
                })
                .expect(202)
                .end(done);
        });
    
        it('checkUpdate', function(done) {
            request
                .get('/command')
                .expect(200)
                .end(function(err,res) {
                    res.body.forEach((el) => {
                        if(el.id === test_id) {
                            el.total.should.equal(2);
                            el.done.should.equal(1);
                            el.date.should.equal("2000-12-31");
                        }
                    });
                    
                    done();
                });
        });
    });
    
    describe('Delete', function() {
        it('deleteCommand', function(done) {
            console.log("ID = " + test_id)
            request
                .post('/command/delete')
                .set("Content-Type", "application/json")
                .send({
                    "id_command": test_id
                })
                .expect(200)
                .end(function(err,res) {
                    console.log(res.body);
                    done();
                });
        });
    })
});

describe('Menu', function() {
    var menu_test;
    
    describe('addMenu', function() {
        it('checkAdd', function(done) {
            request
                .post('/menu/addMenu')
                .set("Content-Type", "application/json")
                .send({
                    "name": "Menu test",
                    "description": "Super menu",
                    "highlight": 1,
                    "size": 5,
                    "available": 1,
                    "id_promotion": 2
                })
                .expect(201)
                .end(function(err,res) {
                    menu_test = res.body.id;
                    res.body.name.should.equal("Menu test");
                    res.body.description.should.equal("Super menu");
                    res.body.highlight.should.equal(1);
                    res.body.size.should.equal(5);
                    res.body.available.should.equal(1);
                    res.body.id_promotion.should.equal(2);
                
                    done();
                });
        });
    });
    
    describe('updateMenu', function() {
        it('checkUpdate', function(done) {
            request
                .put('/menu/updateMenu')
                .set("Content-Type", "application/json")
                .send({
                    "id": menu_test,
                    "name": "Menu modifié",
                    "description": "Moins bien menu",
                    "highlight": 0,
                    "size": 10,
                    "available": 0,
                    "id_promotion": 1
                })
                .expect(201)
                .end(function(err,res) {
                    res.body.name.should.equal("Menu modifié");
                    res.body.description.should.equal("Moins bien menu");
                    res.body.highlight.should.equal(0);
                    res.body.size.should.equal(10);
                    res.body.available.should.equal(0);
                    res.body.id_promotion.should.equal(1);
                
                    done();
                });
        });
    });
    
    describe('removeMenu', function() {
        it('checkRemove', function(done) {
            request
                .delete('/menu/removeMenu/' + menu_test)
                .expect(200)
                .end(done);
        });
    });
});