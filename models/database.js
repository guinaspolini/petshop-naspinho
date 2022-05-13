const mongoose = require('mongoose')

const animais = mongoose.model('animais', { identification: String, nome: String, idade: String, gato: Boolean, cachorro: Boolean, raça: String })
module.exports = animais
