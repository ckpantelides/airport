// inquirer module used for command line input
const inquirer = require('inquirer');

// import class & function modules
var takeoff = require('./takeoff');
var landing = require('./landing');
// var Airplane = require('./airplane');
// var Airport = require('./airport');
var objects = require('./objects');

/*
// airplane objects
let jim = new Airplane("Jim", "grounded", "Gatwick");
let ben = new Airplane("Ben", "airborne", "None");
let henry = new Airplane("Henry", "grounded", "Heathrow");

// airport objects
let heathrow = new Airport("Heathrow", 2, 5);
let gatwick = new Airport("Gatwick", 2, 5);
let luton = new Airport("Luton", 1, 3);
*/
// CLI questions
module.exports = function () {
  inquirer.prompt([{

      name: 'airplane',
      type: 'list',
      message: 'Which airplane?',
      choices: ['ben', 'jim', 'henry'] }
      ,{
      name: 'action',
      type: 'list',
      message: 'takeoff or landing?',
      choices: ['takeoff', 'land'] }
      ,{
      name: 'airport',
      type: 'list',
      message: 'Which airport?',
      choices: ['heathrow', 'gatwick', 'luton']
      }])

  // replace user answers with the corresponding airplane/airport object
  .then((answers) => {
    if (answers.airplane == "ben") {
      var plane = objects.ben;
    }
    else if (answers.airplane == "jim") {
      var plane = objects.jim;
    }
    else if (answers.airplane == "henry") {
      var plane = objects.henry;
    }

    if (answers.airport == "heathrow") {
      var port = objects.heathrow;
    }
    else if (answers.airport == "gatwick") {
      var port = objects.gatwick;
    }
    else if (answers.airport == "luton") {
      var port = objects.luton;
    }

    if (answers.action == "takeoff") {
      takeoff(plane, port);
      }
    else if (answers.action == "land") {
      landing(plane, port);
      }
    });
  };
