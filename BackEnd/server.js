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
    var Url;
    var searchterm = req.body.name.replace(/ /, '+').replace(/&/, 'and');
     https.get('https://www.googleapis.com/customsearch/v1?q='+ searchterm + '+' + req.body.category + '+poster&cx=003341936895423907508%3Axwtpel8xhue&key=AIzaSyC-3YKB3dDUphIMU8Xv3rcpUTVJRQU09yc', result =>{
        result.on('data',function(d){
          body+=d;
          });
          
        result.on('end', ()=>{
           var thejson = JSON.parse(body)
           Url = thejson.items[0].pagemap.cse_image[0].src;
           req.body.imageUrl = Url;
           console.log(req.body);
           database.collection('messages').insertOne(req.body);
           res.json(req.body);
        })
       // imageUrl[0].imgSrc = Url; 
        }).end();     
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