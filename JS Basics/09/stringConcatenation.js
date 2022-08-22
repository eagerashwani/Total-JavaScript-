// string concatenation - join two or more strings together

let firstName = "Ashwani";
let lastName = "Kumar";

let fullName = firstName + lastName;
console.log(fullName); // op - AshwaniKumar
// + is used to concatenate two strings together


fullName = firstName + " " + lastName;
console.log(fullName); // op - Ashwani Kumar

// ------------------------------------------------------------

let y = "3.123";
let x = "2";

let result = y + x;
console.log(result) // op - 3.1232

// but you want addition not concatenation
result = +x + +y;
console.log(result) // op - 5.123

