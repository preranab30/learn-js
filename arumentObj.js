function add(){
    if(arguments.length===2){
        return arguments[0] + arguments[1];
    } else if(arguments.length===3){
        return arguments[0]+arguments[1]+arguments[2];
    } else {
        return "Invalid arguments";
    }
}
console.log(add(1,2));
console.log(add(1,2,3));
console.log(add(1));

//Spread operator

function sum(...args){
    if(arguments.length===2){
        return arguments[0] + arguments[1];
    } else if(arguments.length===3){
        return arguments[0]+arguments[1]+arguments[2];
    } else {
        return "Invalid arguments";
    }
}
console.log(add(1,2));
console.log(add(1,2,3));
console.log(add(1));

function CalculateArea(...args){
    const pi = 3.1415;
    if(arguments.length === 1) {
        let radius = args[0];
        let result = pi * radius * radius;
        return result;

    }
    else if(arguments.length===3) {
        let length = args[0];
        let width = args[1];
        let result = length * width;
        return result;
    }
}
console.log(CalculateArea(6));
console.log(CalculateArea(6,9));
