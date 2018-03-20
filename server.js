//Dependencies for Node
const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const request = require('request');
const cheerio = require('cheerio'); 
const logger = require("morgan");
const axios = require("axios");


//Initialize Express
const app = express();
const PORT = process.env.PORT || 3030;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extend: true}));
app.use(bodyParser.json());
app.use(logger('dev'));

//Connection to MongoDB

mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/week18Populater", {
  useMongoClient: true
});