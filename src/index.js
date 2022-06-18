const express = require('express');
const PORT = 3001;
const { connect } = require('./database/mongo');
const app = express();
app.get('/connect', (req, res) => {
  connect();
  return "Connected";
});

// app.get('/auth', (req, res) => {

// })

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
