const { application } = require('express');

require('dotenv').config();

application.listen(3000, () => {
  console.log('App is listening on http://localhost:3000')
})