//Creating & Consuming a Promise
// Creating a Promise
const myPromise = new Promise((resolve, reject) => {
let success = true; // simulate success or failure
if (success) {
resolve('Data fetched successfully!');
} else {
reject('Something went wrong!');
}
});
// Consuming a Promise with .then() and .catch()
myPromise
.then((result) => {
console.log('Success:', result); // Data fetched successfully!
})
.catch((error) => {
console.log('Error:', error);
})
.finally(() => {
console.log('Always runs — success or failure');
});