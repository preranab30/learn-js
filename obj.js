const person = {
    name : 'Alice',
    age : 23,
    greet() {
        return `${this.name} and i am ${this.age} years old` 
    },
    birthday() {
        this.age++;
        return `Happy Birthday  ${this.name}! you are now ${this.age}`;
    }
};
console.log(Object.keys((person)));
console.log(Object.values((person)));
console.log(person.greet());
console.log(person.birthday());