module.exports = class Airplane {
  constructor ( name, status, airport ) {
    this.name = name;
    this.status = status;  // grounded or airbourne
    this.airport = airport;
  }
  // function called when taking off from airport
  takeoff() {
    console.log(`${this.name} has liftoff`);
  }
  landed() {
    console.log(`${this.name} has landed`);
  }
}
