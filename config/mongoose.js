// const mongoose = require('mongoose');
// console.log('Mongoose config ');

// mongoose.connect('mongodb://localhost/issueTracker_developer');

// const db = mongoose.connection;

// db.on("error",console.error.bind(console,"Error occur while making mongoose connection"))

// db.once('open',function(){
//     console.log("Connection success to mongoose .");
// });

// module.exports = db;

// Import the mongoose module
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

//Set up default mongoose connection
var mongoDB = process.env.MONGODB_URI;
module.exports = mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log("CONNECTION ESTABLISHED"));