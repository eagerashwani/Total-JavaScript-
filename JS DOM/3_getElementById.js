// I want to select some elements from my website
// And you know we have document object

// select elements by getElementById

// Our HTML looks like this
// <h2 id="heading">Heading</h2>

console.log(document.getElementById('heading')); // this gives us an Object in human readable format
console.dir(typeof document.getElementById('heading')); // this gives us an Object


// We can also store above code in a variable
const heading = document.getElementById('heading');
console.log(heading)