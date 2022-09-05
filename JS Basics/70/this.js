// what if you print this

console.log(this); // op - gives us window object
console.log(window);  // op - gives us window object


function hello(){
    console.log(this);
}
hello();  // op - gives us window object
window.hello(); // op - gives us window object

// hello() is present in the window object