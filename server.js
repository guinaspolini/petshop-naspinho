const mongoose = require('mongoose')
const animais = require('./models/database.js')
require('dotenv').config()

//Access keys
const dbUser = process.env.DB_USER
const dbPass = process.env.DB_PASS


function connectMongoDB() {

	mongoose.connect(`mongodb+srv://${dbUser}:${dbPass}@cluster0.apbb1.mongodb.net/petshop?retryWrites=true&w=majority`)
		.then(() => {
			console.log("MongoDB conectado.")
		}).catch((err) => {
			console.log("MongoDB não conectado." + err)
		})
}

connectMongoDB()
