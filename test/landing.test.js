var Airplane = require('../modules/airplane');
var Airport = require('../modules/airport');
var landing = require('../modules/landing');
var chai = require('chai');

// ensures weather is always sunny
const mockMath = Object.create(global.Math);
mockMath.random = () => 0.5;
global.Math = mockMath;

describe('landing', function () {
    // 1. ARRANGE
    var cityAirport = new Airport("City", 1, 3);
    var testAirport = new Airport("Test", 4, 4);
    var harry = new Airplane("Harry", "airborne", "sky");
    var barry = new Airplane("Barry", "grounded", "City");
    var sally = new Airplane("Sally", "airborne", "sky");

    // 2. ACT
    landing(harry, cityAirport);
    landing(barry, cityAirport);
    landing(sally, testAirport);

  it('the "planesparked" value should increase by one', function () {
    // 3. ASSERT
    chai.expect(cityAirport.planesParked).to.be.equal(2);
  });

  it('airplane status should change to grounded', function () {
    chai.expect(harry.status).to.be.equal("grounded");
  });
  it('Airplane.aiport name should change', function () {
    chai.expect(harry.airport).to.be.equal("City");
  });
  it('Airplane.aiport should remain the same if already grounded', function () {
    chai.expect(barry.airport).to.be.equal("City");
  });
  it('Airplane shouldnt land if airport full', function () {
    chai.expect(sally.airport).to.be.equal("sky");
    chai.expect(testAirport.planesParked).to.be.equal(4);
  });
});
