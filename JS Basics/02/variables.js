"use strict";
//Variables

// Is used to store the information
// use that information later
// we can also change the information later
// Variables is CaseSensitive


// declare a variable --------------------------------
var firstName = "Ashwani";

// use a variable ---------------------------------
console.log(firstName);

// change value -----------------------------------
// no need to use var keyword again
firstName = "Eager"

console.log(firstName)

// if we remove var keyword from line 10, still everything works!
// this may raise problem 
// if by mistake you wrote firstname instead of firstName in line 17
// this create two different variables
// we don't want two different variables
// so, to tackle this problem we use "use-strict"
// JS is loosely typed lang, and we don't want to declare a variable without
// var keyword. use-strict help in that type of problem, and give error if
// we make that type of mistake.