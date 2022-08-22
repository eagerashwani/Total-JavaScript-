// let keyword
// used to declare variables

let myName = "Ashwani";
myName = "Eager";
console.log(myName);

// whats the difference b/w var and let keyword
// 1. Function Scope and Block Scope
// 2. Redeclare and re-assign
// 3. Hoisting

// Redeclare
var fistName = "Ashwani";
var fistName = "Eager"; // redeclare firstName 
// you can use redeclaration with var
let lastName = "kumar";
let lastName = "Ashwani"; // redeclare not allowed here
// you can't use redeclaration with let


// ReAssign
var myCar = "Tata";
myCar = "Honda"; // reassign myCar
// you can use reassignation with var

let myBike = "Bajaj";
myBike = "Royal Enfield";
// you can also use reassignation with let


// Hoisting and Scopes cover later


