// Synchronous programming vs asynchronous programming

// sync. prog.

// Executes task by its order
// JS is sync single threaded prog. lang.

console.log("Before");

for(let i=1; i<10000; i++){
    console.log("inside loop");
}

console.log("After");

// op
// Before
// inside loop
// After

// Tasks that takes time, blocks further task execution
// like for blocks "After"

// Real life example - when we have to fetch api having large info
// that takes more time.
// The API blocks further web page tasks


//! setTimeout

console.log("setTimeout start");
function hello(){
    console.log("Hello world");
}

setTimeout(hello, 1000);
// setTimeout takes a func and delay time in ms 
console.log("SetTimeout end");


// op
// setTimeout start
// setTimeout end
// Hello World

//? ex 2

console.log("script start");

setTimeout(()=>{
    console.log("Inside setTimeout");
},0);

for(let i=1; i<100; i++){
    console.log("....");
}

console.log("script end");

// op after commenting ex 1
// script start
// ....
// script end
// Inside setTimeout
 

//* Working  
//  1st GEC go in the callstack
//  line 48 prints 
//  line 50 go in webApi (setTimeout is browser's function)
//  line 54 prints 
//  line 58 prints 
//  callback of setTimeout is present in callback queue 
//  Event loop check callstack, if all lines execute than callback go in callstack 
//  print Inside setTimeout

// min time delay is 1000ms


// setTimeout returns an id
 
console.log("script start");

const id = setTimeout(()=>{
    console.log("Inside setTimeout clearTimeout");
},10000);

for(let i=1; i<100; i++){
    console.log("....");
}  
console.log("setTimeout id is ", id);
console.log("clearing time out");
clearTimeout(id);
console.log("script end");

// setTimeout's callback never prints
// callback deleted in callback queue