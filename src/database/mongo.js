const mongoose = require('mongoose');

module.exports = function connect() {
    const options = {
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useCreateIndex:true,
        useFindAndModify: false,
    };
    mongoose.connect(process.env.MONGO_DB_PASSWORD, options);
}