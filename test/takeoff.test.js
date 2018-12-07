var Airplane = require('../modules/airplane');
var Airport = require('../modules/airport');
var takeoff = require('../modules/takeoff');
var chai = require('chai');

describe('takeoff', function () {
    // 1. ARRANGE
    var cityAirport = new Airport("City", 1, 3);
    var testAirport = new Airport("Test", 4, 4);
    var harry = new Airplane("Harry", "airborne", "sky");
    var barry = new Airplane("Barry", "grounded", "City");
    var sally = new Airplane("Sally", "grounded", "Test");

    // 2. ACT
    takeoff(harry, cityAirport);
    takeoff(barry, cityAirport);
    takeoff(sally, cityAirport);

  it('the "planesparked" value should decrease by one', function () {
    // 3. ASSERT
    chai.expect(cityAirport.planesParked).to.be.equal(0);
  });

  it('airplane status should change to airborne', function () {
    chai.expect(barry.status).to.be.equal("airborne");
  });
  it('Airplane.aiport name should change', function () {
    chai.expect(barry.airport).to.be.equal("sky");
  });
  it('Airplane should remain grounded if takeoff is from wrong airport', function () {
    chai.expect(sally.status).to.be.equal("grounded");
  });

});
