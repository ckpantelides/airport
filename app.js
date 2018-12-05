const express = require('express');
const bodyParser = require('body-parser');
// const request = require('request');
const app = express();

// make static files available i.e. css
app.use(express.static('public'));

// serves all requests which includes /images in the url from the images folder
app.use('/images', express.static(__dirname + '/Images'));

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// inquirer module used for command line input
const inquirer = require('inquirer');

// require the Airplane & Airport classes, and the takeoff function
// var weather = require('./modules/weather');
var Airplane = require('./modules/airplane');
var Airport = require('./modules/airport');
var takeoff = require('./modules/takeoff');
var landing = require('./modules/landing');
var questions = require('./modules/questions');

// pose CLI questions from questions module
questions();

app.get('/', function (req, res) {
  res.render('index', {title: "Airport Challenge", error: null});
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  //  console.log(`Our app is running on port ${ PORT }`);
});
