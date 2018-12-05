var Airport = require('./airport');
var Airplane = require('./airplane');

// airplane objects
exports.jim = new Airplane("Jim", "grounded", "Gatwick");
exports.ben = new Airplane("Ben", "airborne", "None");
exports.henry = new Airplane("Henry", "grounded", "Heathrow");

// airport objects
exports.heathrow = new Airport("Heathrow", 2, 5);
exports.gatwick = new Airport("Gatwick", 2, 5);
exports.luton = new Airport("Luton", 1, 3);
