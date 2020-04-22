const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let newSchemaUser = new Schema({
  nombre: { type: String }, // nombre completo
  apellidoPaterno: { type: String },
  apellidoMaterno: { type: String },
  instituto: { type: String },
  email: { type: String  },
  password: { type: String},
  passwordConfirm: { type: String }

});


module.exports = mongoose.model('userModel', newSchemaUser);
