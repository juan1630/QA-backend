const express = require('express');
const userModel = require('../models/modelUser');


const app = express();

app.post('/login', (req, res) => {


  let body = req.body;
  console.log( body.email )
  userModel.findOne({ email: body.email })
  .exec( (error, user) => {
      if(error){
        return res.status(500)
        .json({
          ok: false,
          message: 'Algo pasó',
          error
        });
      }

      if( !user || user === null || user.length < 0){
        return res.status(400)
        .json({
          ok:false,
          message: 'No se encontró el usuario'
        })
      }


      return res.status(200)
      .json({
        ok:true,
        message: 'uauario encontrado',
        usuario: user
      });

  })


});

module.exports = app;
