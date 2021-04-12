'use strict'
/* const http = require('http');
http.createServer(function(req, res){
    res.writeHead(200,{'content-type': 'text/html'});
    res.end('Hello World!');
}).listen(8080); */


const { text } = require('express');

const mongoose = require ('mongoose');
const app = require ('./app');
const config = require('./config');

mongoose.connect(config.db, (err, res)=>{
    if (err){
        return console.log(`Error al conectar a la base de datos: ${err}`);
    };
    console.log('conexion a la base de datos establecida...');

    app.listen(config.port, ()=>{
        console.log(`Api rest corriendo en http://localhost:${config.port}`);
    });
    
});



