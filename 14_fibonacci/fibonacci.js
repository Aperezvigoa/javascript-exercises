const fibonacci = function(n) {
    
    if (n === 0 || n === "0") {
        return 0;
    } else if ( n < 0)  {
        return "OOPS";
    } else {
        let index = typeof(n) === "string" ? parseInt(n) : n;
        let fib = [1, 1];
        for (let i = 0; i < index; i++) {
            let temp = fib[i] + fib[i+1];
            fib.push(temp);
        }
        return fib[index-1];
    }
    
};

// Do not edit below this line
module.exports = fibonacci;


        