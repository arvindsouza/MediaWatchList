var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongo = require('mongodb').MongoClient;
var objid = require('mongodb').ObjectID;

var database;

var messages = [
    {
      'name': 'IT',
      'category':'Movie',
      'status':false,
      'stat': 'played'
    },
    {
      'name':'Hellblade',
      'category': 'Game',
      'status': false,
      'stat': 'played'
    }
  ] ;

app.use(bodyParser.json());

app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

app.post('/api/message', function(req, res){
    //res.sendStatus(200);
    database.collection('messages').insertOne(req.body, function(err, obj){
        if(!err)
        console.log(req.body);
        else
        console.log('Error!');
    });
    res.json(req.body);
})


app.get('/api/messages', function(req, res){
    database.collection('messages').find().toArray(function(err, arr){
        if(!err)
        res.json(arr);
        else
        console.log('Error!');
    })   
})

app.post('/api/delete', function(req, res){
    console.log(req.body._id);
     database.collection('messages').remove({_id: objid(req.body._id) }, function(err, obj){
         if(!err)
    console.log(obj.result.n); 
    else
    console.log(err + 'error');
    });
    res.json(req.body);
    
})



mongo.connect('mongodb://localhost:27017/test', function(err, db){
    console.log('Connected to DB');
    database = db;
})


var server = app.listen(5000, function(){
    console.log('lISTENING', server.address().port);
})