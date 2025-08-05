const removeFromArray = function(array, ...theArgs) {

    let arr = array;
    for (const arg of theArgs) {
        while (arr.includes(arg)) {
            let index = arr.indexOf(arg);
            let leftSide = arr.slice(0, index);
            let rightSide = arr.slice(index + 1);
            arr = leftSide.concat(rightSide);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
