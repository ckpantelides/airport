var Airport = require('./airport');
var Airplane = require('./airplane');
var weather = require('./weather');

module.exports = function landing(Airplane, Airport) {
    if (weather()) {
      if (Airplane.status === "airborne") {
        if (Airport.capacity > Airport.planesParked) {
          Airplane.landed();
          Airplane.airport = Airport.name;
          Airport.planesParked += 1;
          Airplane.status = "grounded";
        }
        else if (Airplane.capacity <= Airport.planesParked) {
          console.log("We're full!");
        }
      }
      else if (Airplane.status === "grounded") {
        console.log(`${Airplane.name} already grounded`);
      }
    }
    else { console.log("Bad weather chaps. Hold off");}
}
