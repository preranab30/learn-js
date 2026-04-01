// let fruit = ["Apple", "Banana", "Cherry", "Dragon fruit"];
// let[fruit1, fruit2, ...remainingfruit] = fruit;
// console.log(fruit1);
// console.log(fruit2);
// console.log(...remainingfruit);


// rest operator

let fruit = ["Apple", "Banana", "Cherry", "Dragon fruit"];
let[fruit1,   , ...remainingfruit] = fruit;
console.log(fruit1);
//console.log(fruit2);
console.log(...remainingfruit);

