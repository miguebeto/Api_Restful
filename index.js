'use strict'

const { text } = require('express');
const express = require('express');
const bodyParser = require('body-parser')

const app = express();
const port = process.env.port || 3001

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.listen(port, ()=>{
    console.log(`Api rest corriendo en http://localhost:${port}`);
});


/* const http = require('http');
http.createServer(function(req, res){
    res.writeHead(200,{'content-type': 'text/html'});
    res.end('Hello World!');
}).listen(8080); */
