const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let newSchemaUser = new Schema({
  nombre: { type: String, required: [true, 'El nombre es requerido'] }, // nombre completo
  apellidoPaterno: { type: String,required: [true, 'El apellido es requerido'] },
  apellidoMaterno: { type: String },
  instituto: { type: String,required: [true, 'El instituto es requerido'] },
  password: { type: String, required:[true, 'La constrasenia es requerida'] },
  email: { type: String, required: [true, 'El email es requerido'] }
});


module.exports = mongoose.model('userModel', newSchemaUser);
