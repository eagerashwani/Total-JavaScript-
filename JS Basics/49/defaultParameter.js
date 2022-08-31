// default parameter

// suppose you have a function sum(a,b) that takes two parameters
// but you only pass one argument
// to deal this type of situation, we have default parameters
// if one arugument is not there, than use the default one.


// Before ES6

function add(a,b){
    if(typeof b === "undefined"){
        b = 1;
    }
    return a+b;
}

console.log(add(2));  // 3


// Current Scenerio

function sum(a, b=1){
    return a + b;
}

console.log(sum(3,3));