const { Schema, model } = require('mongoose');

const rSchema = new Schema({
  title: String,
  description: String,
  image: String,
  location: String,
  author: String
})
let reportSchema = model('Report', rSchema);
module.export = reportSchema;