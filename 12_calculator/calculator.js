const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((acc, next) => acc + next, 0);
};


const multiply = function(arr) {
  return arr.reduce((acc, actual) => acc * actual, 1);
};

const power = function(n, p) {
  let result = 1;
  for (let i = 0; i < p; i++) {
    result *= n;
  }
  return result;
};

const factorial = function(x) {
	let result = 1;
  for (let i = x; i > 0; i--) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
