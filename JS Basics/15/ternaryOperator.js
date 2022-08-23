// suppose you have to store value in variable on the basis of a condition 

// Normal way, if else

let marks = 33;
let result;

if(marks>=33){
    console.log("Pass");
}
else{
    console.log("Fail");
}


// Ternary Operator or conditional operator

let age = 18;
let ageStatus = age > 18 ? "Adult" : "Kid";

// age > 18 ? --> This is a condition
// if condition is true, save what after ? in variable
// if condition is false, save what after : in variable

console.log(ageStatus);
