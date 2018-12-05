var Airport = require('./airport');
var Airplane = require('./airplane');
var weather = require('./weather');

module.exports = function takeoff(Airplane, Airport) {
    if (weather()) {
  
      if (Airplane.status === "grounded") {
        if (Airplane.airport == Airport.name) {
          Airplane.takeoff();
          Airplane.status = "airborne";
          Airport.planesParked -= 1;
        }
        else if (Airplane.airport != Airport.name) {
          console.log("Wrong airport chaps");
        }
      }
      else if (Airplane.status === "airborne") {
        console.log(`${Airplane.name} already airborne`);
      }
    }
    else { console.log("Bad weather chaps. Hold off");}
}
