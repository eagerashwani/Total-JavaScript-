// hoisting --> a behavior in which a function or a variable can be used before declaration.

// only happens in function declaration not in function expression and arrow function

function sayHi(){
    console.log("Hi Everyone");
}

sayHi();  // this is normal behaviour


saySomething("Hello from Seoul");  // this is hoisting

function saySomething(myString){
    console.log(myString);
}


console.log(hello);  // undefined
// only gives undefined with var, give error with let & const case
var hello = "Hello World";
console.log(hello);