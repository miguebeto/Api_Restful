'use strict'

const { text } = require('express');
const express = require('express');
const app = express();
app.listen(3000, ()=>{
    console.log('Api rest corriendo en http://localhost:3000');
});


/* const http = require('http');
http.createServer(function(req, res){
    res.writeHead(200,{'content-type': 'text/html'});
    res.end('Hello World!');
}).listen(8080); */
