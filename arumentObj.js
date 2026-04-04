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
