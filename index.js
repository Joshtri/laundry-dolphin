const express = require('express');
const path = require('path');
const dotenv = require("dotenv");
const morgan = require('morgan'); 
const bodyparser = require('body-parser');
const mysql = require('./server/database/connection').connect;
// const cors = require('cors');

const favicon = require('serve-favicon');

const app = express();
const PORT = process.env.PORT || 8080;


// Parse incoming request bodies
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

// set the path for your favicon
app.use(favicon(path.join(__dirname, '/public/favicon.png')));

//memberi keterangan dir public menjadi bagian dari asset.
app.use(express.static(__dirname + '/public'));

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
//agar dapat mendetect path views pada folder data 🤭 🤭
app.set('views', './views/partials');
//app.set('views', './');

app.set('views',[
    `${__dirname}/views`,
    __dirname + '/views/partials'

]);

//use the router and give the head root
app.use('/',
 require('./server/routes/home'),
 require('./server/routes/loginregist')
 );

app.use('/', require('./server/routes/order'))



app.listen(PORT,console.log("Server start for port: " + PORT));