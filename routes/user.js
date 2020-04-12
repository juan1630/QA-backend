const express = require('express');
const userModel = require('../models/modelUser');


let app = express();



app.post('/nuevo/usuario', (req, resp ) => {

  let body = req.body;

  console.log( body );

  let User = new userModel({
    nombre: body.nombre,
    apellidoPaterno: body.apellidoPaterno,
    apellidomaterno: body.apellidoMaterno,
    instituto: body.instituto,
    email: body.email,
    password: body.password

  });


  User.save( (error, userSaved) => {
      if(error){
        return resp.status(500)
        .json({
          ok: false,
          message: 'Algo ocurrio',
          error
        });
      }

      if(!userSaved ){
        return resp.status(400)
        .json({
          ok:false,
          message: 'No se conecto'
        });

      }


      return resp.status(200)
      .json({
        ok: true,
        message: 'Usuario guardadio',
        user: userSaved
      });
  })

});

module.exports = app;
