var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongo = require('mongodb').MongoClient;

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
    console.log(req.body);
    //res.sendStatus(200);
    database.collection('messages').insertOne(req.body);
    //res.json(messages);
})


app.get('/api/messages', function(req, res){
    database.collection('messages').find().toArray(function(err, arr){
        res.json(arr);
    })   
})



mongo.connect('mongodb://localhost:27017/test', function(err, db){
    console.log('Connected to DB');
    database = db;
})


var server = app.listen(5000, function(){
    console.log('lISTENING', server.address().port);
})