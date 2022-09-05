// js function = fun() + object

function hello(){
    console.log("Hello World");
}

// there is a property in js fun() named name--> tells fun() name

console.log(hello.name);  // hello

// you can add your own properties in function()

hello.myBeat = 120;
console.log(hello.myBeat);  // 120

// func provides more useful properties

// imp
// func gives us free space(actually there is nothing like free space)
// and that free space is prototype
// free space means empty object {}
// only func provide prototype property

console.log(hello.prototype); 
// constructor : ƒ hello()
// [[Prototype]] : Object


hello.prototype.firstName = "Ashwani";
hello.prototype.movie = function(){
    return "Avengers Endgame";
}

console.log(hello.prototype); // {firstName: 'Ashwani', movie: ƒ, constructor: ƒ}
console.log(hello.prototype.movie());  // Avengers Endgame



// lets create an array
//const numbers = [1,2,3];
// but internally it works like this
const numbers = new Array(1,2,3);
console.log(Array.prototype); // [....prototype....]
// but we study earlier prototype is an object
// if you check isArray(), it's true

// suppose you need to know about the prototype of numbers
console.log(Object.getPrototypeOf(numbers));  // same as line 43

console.log(numbers);


// you can also change your prototype

function helloHi(){
    console.log("Hello HI");
}

console.log(hello.prototype);
hello.prototype = [];
console.log(hello.prototype);
hello.prototype.push(1);
console.log(hello.prototype);
