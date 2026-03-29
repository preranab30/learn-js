// function add(a=18, b){
//     return a+b;
// }

// let result= add();
// console.log(result);

//it take default value
function add(a = 18, b){
    return a + b;
}

let result = add(undefined, 2);
console.log(result);  // Output: 20


//  Arrow funtion which is ES6
const goodbye = (message) => {
    `good to see you , $(message)!`
}
console.log(goodbye('good bye'));

const goodbye1 = (message) => {
   return `good to see you , $(message)!`
}
console.log(goodbye1('good bye'));// undefined output because of missing return keyword

// console.log(greetbye('good to see));
// function greetbye = (msg) => {
//     return 'good to see, $(msg)'
// }
// console.log()