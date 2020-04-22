const express = require('express');
const userModel = require('../models/modelUser');
const jwt = require('jsonwebtoken');

const SEED = 'app-qa-moviles';

const app = express();

app.post('/login', (req, res) => {


  let body = req.body;
  console.log( body )

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

      if(user){
         let token = jwt.sign({
            id:user.id,
            user
         }, SEED, {  expiresIn: 60 * 60 * 20 } );

        return res.status(200)
        .json({
          ok:true,
          message: 'uauario encontrado',
          token,
          usuario: user
        });

      }


  })


});

module.exports = app;
