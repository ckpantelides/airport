// var Robot = require('./robot');

module.exports = function weather() {
  let x = Math.random();
  let sunny;
    if (x > 0.3) { sunny = true; }
    else { sunny = false;}
    return sunny;
}
