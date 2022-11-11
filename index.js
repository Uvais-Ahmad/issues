const express = require('express');
const app = express();
const path = require('path');
const db = require('./config/mongoose');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 8000;

app.use(express.urlencoded());


app.use('/',require('./routers'))

//EJS setup 
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));



app.listen(port,function(err){
    if(err){ console.log('Issue comes while creating server ', err)}
    console.log('Issue Tracker application is runnig on port 8000');
})