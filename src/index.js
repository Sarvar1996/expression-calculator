function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    var result= 0, expr= expr.match(/[+\-]*(\.\d+|\d+(\.\d+)?)/g);
    while(expr.length){
        result+= parseFloat(expr.shift());
    }
    return result;
}


module.exports = {
    expressionCalculator
}