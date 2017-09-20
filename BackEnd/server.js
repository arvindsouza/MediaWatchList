var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongo = require('mongodb').MongoClient;
var objid = require('mongodb').ObjectID;

const https = require('https');

var database;


app.use(bodyParser.json());

app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

app.post('/api/message', function(req, res){
    let body = '';
    https.get('https://www.googleapis.com/customsearch/v1?q='+ req.body.name + '+poster&cx=002034509201801121574%3Agjigc9llnne&key=AIzaSyCjDmKa9pJOvx7JioM1j8-5l-oowKRJ-rQ', result =>{
        result.setEncoding('utf8');
        result.on('data',d=>{
          body+=d;
          result.on('end',()=>{
           JSON.parse(body);   
            console.log(body.kind);   
          })                      
        });
    });
    //res.sendStatus(200);
    database.collection('messages').insertOne(req.body);
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