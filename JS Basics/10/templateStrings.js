// Can you print this
// "my name is Ashwani and my age is 24" by using variables


// The way you know

let nameIs = "Ashwani";
let age = 24;

let about = "my name is " + nameIs + " and my age is " + age;
console.log(about);

// Above way is very hectic and not so good for many variables.

// Second way - Template Strings

let mySelf = `my name is ${nameIs} and my age is ${age}`;
console.log(mySelf);

// for Template Strings, you have to use ${varaibleName}