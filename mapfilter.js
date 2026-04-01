const stud = [
    {id:1, name:"Alice", grade: "a"},
    {id:2, name:"BOB", grade: "b"},
    {id:3, name:"chuk" ,grade: "c"},
    {id:4, name:"fenty", grade: "d"},
    {id:5, name:"depu", grade: "b"},

];
let Noofgrade = stud.filter(stud => stud.grade=="b");
console.log(Noofgrade);

// let noofgrade1 = stud.map(stud => stud.grade=='b');
// console.log(noofgrade1);
// let noofgrade1 = stud.find(stud => stud.grade == "b");
// console.log(noofgrade1);

let noofgrade2 = stud.findLast(stud => stud.grade == "b");
console.log(noofgrade2);

let noofgrade3 = stud.findLast(g => g.grade === "b");
console.log(noofgrade3);

let noofgrade4 = stud.findLast(g => g.grade === "b");
console.log(noofgrade3);

const mapfun = stud.map(id => id.grade === 'b');
console.log(mapfun);

