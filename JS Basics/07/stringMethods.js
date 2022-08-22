// Here are soome useful string methods

// trim()
// toUpperCase()
// to LowerCase()
// slice()

// Imp : These methods doesn't change your string, they give new string. 
// Bcz strings are immutable, you have to store the new string.


let firstName = "    Ashwani       ";
// your variable have many spaces and you don't want any spaces

console.log(firstName.length);  // op 18
firstName.trim();
console.log(firstName.length); // op 18
// still print 18, bcz strings are immutable, you can't change them directly


// There are 2 ways : 1st is declare new variable and 2nd reassign existing variable

//1st
let newName = firstName.trim();
console.log(newName.length);  // op 7

//2nd 

firstName = firstName.trim();
console.log(firstName.length); // op 7



// toUpperCase()

let myName = "ashwani Kumar";
console.log(myName.toUpperCase());  // op - ASHWANI KUMAR
console.log(myName); // op - ashwani Kumar
// if you want myName in upper, first you have to store it.


// toLowerCase()
console.log(myName.toLowerCase()) // op - ashwani kumar
console.log(myName) // op - ashwani Kumar


// slice()
let phone = "Apple";
phone = phone.slice(0,4);
console.log(phone); // op - Appl
// slice takes 2 index, startIndex and endIndex
// It goes to endIndex but not include that in string

let model = phone.slice(1); // It start from given index and go to end of the string
console.log(model);

console.log(model.slice(-2)) // It gives 2 elements from end of string