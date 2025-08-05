const convertToCelsius = function (f) {
  let celsius = parseFloat(((f - 32) * (5 / 9)).toFixed(1));

  return celsius;
};

const convertToFahrenheit = function (c) {
  let fahrenheit = parseFloat((c * (9 / 5) + 32).toFixed(1));

  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
