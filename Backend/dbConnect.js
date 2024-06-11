const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://mavecomputer45:Pass%40123@news.leywtrs.mongodb.net/')
const connection = mongoose.connection


connection.on('connected', () => {
  console.log('Mongo DB Connection Successfull')
})


connection.on('error', () => {
  console.log('Mongo DB Connection Failed')
})


module.exports = mongoose