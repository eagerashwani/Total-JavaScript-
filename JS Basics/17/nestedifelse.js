// if else inside if else

// Guess my age game, if age = 24 print right, if age<24 low, else high

let age = 24;
let enterAge = +prompt("Enter age");  // + is used to convert
console.log(typeof enterAge, enterAge);  // op- string ${enterAge}
// prompt take input as string, so we have to make it a number
if(enterAge === age){
    console.log("You're correct😘😘");
}
else{
    // nested if else
    if(enterAge < age){
        console.log("age is low");
    }
    else{
        console.log("age is high");
    }
}