// boolean - true or false

let a = 3;
let b = 5;

console.log(a>b); // comparision <,>, <=, >=

// == vs ===

let x = 5;
let y = 5;

console.log(x == y);  // true
// if you change any value to string. eg : x = "5"
x = "5";
console.log(x == y);  // true

// == only compares value not data type


let p = 3;
let q = 3;
console.log(p === q); // true

// make q as string
q = "3";
console.log(p === q); // false

// === compares value as well as data type


// != vs !==

let n = 4;
let m = 4;

console.log(n != m);
console.log(n !== m);

// observe changes by changing value and data type



