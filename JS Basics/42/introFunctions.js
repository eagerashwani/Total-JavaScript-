// functions - if you have to use same code over and over again 
// than function helps you.

// function can do what you want

// suppose you have to print hello world 5 times
console.log("Hello world");
console.log("Hello world");
console.log("Hello world");
console.log("Hello world");
console.log("Hello world");

// There is rule in coading, DRY - Don't repeat yourself

function sayHelloWorld(){
    console.log("Welcome to my world");
}

// call the function
// you can call a function many times you want
sayHelloWorld();
sayHelloWorld();
sayHelloWorld();
sayHelloWorld();
sayHelloWorld();

// make a resuable function
// num1 and num2 is parameters
function addTwoValues(num1, num2) {
    return num1 + num2;
}

const sumIs = addTwoValues(4,5); // arguments
console.log(sumIs);


// isEven function

function isEven(number){
    if(number%2 === 0)
        return true;
    else
        return false;
}

// isEven function --> return number % 2 === 0

console.log(isEven(9));


// firstChar

function firstChar(myString){
    return myString[0];
}

console.log(firstChar("Ashwani"));


// Linear Search

function linearSearch(myArray, target){
    for(let i in myArray){
        if(myArray[i] === target)
            return "Index is " + i;
    }
    return -1;
}

console.log(linearSearch([1,2,3],2));