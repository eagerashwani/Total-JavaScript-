// typeof : gives the type of variable

// In JS, we have different Data Structures, like : string, number, null etc

let age = 24;
console.log(typeof age);  // op - number

let myName = "Eager Ashwani";
console.log(typeof myName); // op - string


// convert number to string
// just add empty string
let price = 1100;
price = price + "";
console.log(typeof price);


// convert string to number
let key = "231";
key = +key;
console.log(typeof key);


// There is many ways, another is

let userName = "eagerashwani";
userName = Number(userName);
console.log(typeof userName);

userName = String(userName);
console.log(typeof userName);