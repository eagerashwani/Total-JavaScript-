// Undefined 
// declared but not assign, not work with const keywword

let firstName;
console.log(firstName, typeof firstName); // op - undefined 'undefined'
// you can print many stuff using , in console.log

var lastName;
console.log(lastName, typeof lastName); // op - undefined 'undefined'
lastName = "Kumar";
console.log(lastName, typeof lastName); // op - Kumar string

// null
// means nothing

let brand = null;
console.log(brand, typeof brand); // op - null 'object'
// Here is a bug in JS
// typeof of brand is object


// BigInt - 2020 new Data Type

console.log(Number.MAX_SAFE_INTEGER); // op - 9007199254740991
// This gives you, max limit you can store in number

// But, you have very big number (you can also use BigInt in small number)
// There are two ways to make a number bigInt

// 1st
let a = BigInt(353453);
console.log(a, typeof a);

//2nd
let b = 12n;
// just add n in the end of a number

console.log(a + b);
// if one variable is not BigInt, than you can't perform operations.



