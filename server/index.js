//=================================================
//                    LIBS
//=================================================

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const socketIo = require('socket.io');
const http = require('http');


// importamos el puerto y el objeto de conexion

const {PORT, conexion} = require('../config/index');
// iniciamos el express
const app = express();


// Habilitamos el cors
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  next();
});


// el middleware bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: 'application/*+json' }));


// traemos las rutas
app.use(require( '../routes/index' ));

// creacion del servidor
let Server = http.createServer(app);
// inicializacion de los sockets
module.exports.io = socketIo(Server)

// conexion a la DB
mongoose.connect( conexion,  {
          useNewUrlParser: true,
          useUnifiedTopology: true
          })

// servidor escuchando en el puerto
Server.listen( PORT, (err) => {
   if (err) throw new Error(err);
});

console.log(`Server on port: ${PORT}`);
