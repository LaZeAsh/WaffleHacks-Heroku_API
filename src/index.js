const express = require('express');
const { connect } = require('./database/mongo');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const { reportSchema } = require('./database/models/report');
// const fs = require('fs');
// const path = require('path');

app.get('/connect', (req, res) => {
  connect();
  return "Connected";
})

app.post('/addreport', async(req, res) => {
  let title = req.body.title;
  let description = req.body.description;
  let location = req.body.location;
  let author = req.body.author;
  let image = req.body.image;
  await (await reportSchema.create({ title: title, description: description, location: location, author: author, image: image })).save();
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running`);
});

