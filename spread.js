let user = {sname:"tonny" , age : 37};

let item = {name: "chair", price: 3400};

let allInOne = {...user,...item}
console.log(allInOne);

let copyFun = {...user}
copyFun.age = 33;
console.log(copyFun.age);
console.log(user);
console.log(copyFun);

let concat = user + " " + item;
console.log(concat);

function calculate(a,b,c,d){
    return a+b+c+d;
}
function calculate(a,b,c){
    return a+b+c;
}

let num = [1,2,3,4];
const result = calculate(...num);
console.log(result);


let arr = [10, 1, 0, 105, 101];
let maximum = Math.max(...arr);
console.log(maximum);
 

let min = Math.min(...arr);
console.log(min);


let sort = [...arr].sort((a, b) => b - a)
let secondLaregest = sort[1];
console.log(sort);
console.log(secondLaregest);