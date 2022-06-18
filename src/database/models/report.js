const { Schema, Mongoose } = require('mongoose');

const reportSchema = new Schema({
  title: String,
  description: String,
  image: String,
  location: String,
  author: String
})
mongoose.module('Report', reportSchema)
module.export = reportSchema;