const sumAll = function (a, b) {
  if (!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0) {
    return "ERROR";
  } else {
    let max = a > b ? a : b;
    let min = a < b ? a : b;
    let number = 0;

    for (min; min <= max; min++) {
      number += min;
    }
    return number;
  }
};

// Do not edit below this line
module.exports = sumAll;
