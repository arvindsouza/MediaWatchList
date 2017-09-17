var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongo = require('mongodb').MongoClient;
var objid = require('mongodb').ObjectID;

var database;


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
    res.json(req.body);
})


app.get('/api/messages', function(req, res){
    database.collection('messages').find().toArray(function(err, arr){
        res.json(arr);
    })   
})

app.post('/api/delete', function(req, res){
     database.collection('messages').deleteOne({_id: objid(req.body._id) }, function(err, obj){
    res.json(req.body);
    });
})

app.post('/api/update', function(req, res){
    console.log(req.body);
    database.collection('messages').update({_id: objid(req.body._id)}, {$set: {status: req.body.status}}, function(err, obj){
        console.log('updated');
        res.json(req.body);
    })
})


mongo.connect('mongodb://localhost:27017/test', function(err, db){
    console.log('Connected to DB');
    database = db;
})


var server = app.listen(5000, function(){
    console.log('lISTENING', server.address().port);
})