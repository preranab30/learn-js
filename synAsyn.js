//synchronous 

console.log("step1");
console.log("step2");
console.log("step3");


// Asynchronous
console.log("step1");
setTimeout(() => {
    console.log( "step 2" )
}, 2000);
setTimeout(() => {
    console.log("step3");
}, 6000);

//callbacks-passing function as argument(actual value) to the another function
function greet(name,callback){
    console.log('hello'  , name);
    callback()
}
function sayBye() {
    console.log("Good Bye");
}

greet("Alice", sayBye);

