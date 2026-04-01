function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}

function mul(a,b){
    return a*b;
}

function div(a,b){
    if (b== 0){
        return "Error: can not divide by zero";
    }
    else {
        return a/b;
    }
}

function calculate(a,b,operator){
    return operator(a,b);
}

console.log(calculate(2,3,add));
console.log(calculate(2,3,sub));
console.log(calculate(2,3,mul));
console.log(calculate(3,0,div));