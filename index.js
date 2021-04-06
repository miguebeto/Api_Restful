'use strict'
/* const http = require('http');
http.createServer(function(req, res){
    res.writeHead(200,{'content-type': 'text/html'});
    res.end('Hello World!');
}).listen(8080); */


const { text } = require('express');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require ('mongoose')

const app = express();
const port = process.env.port || 3001

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/api/product', (req,res)=>{
res.send(200, {products: []});
});

app.get('/api/:product', (req,res)=>{

});

app.post('/api/product', (req,res)=>{
console.log(req.body);
res.status(404).send({massage: 'El producto no existe'});
});

app.put('/api/product', (req,res)=>{

});

app.delete('/api/product', (req,res)=>{

});

mongoose.connect('mongodb://localhost:27017/shop', (err, res)=>{
    if (err){
        return console.log(`Error al conectar a la base de datos: ${err}`);
    };
    console.log('conexion a la base de datos establecida...');

    app.listen(port, ()=>{
        console.log(`Api rest corriendo en http://localhost:${port}`);
    });
    
});



