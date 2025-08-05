const reverseString = function(str) {
    let splittedArr = str.split("");
    return splittedArr.reverse().join("");
};

console.log(reverseString("hola soy Alex"));

// Do not edit below this line
module.exports = reverseString;
