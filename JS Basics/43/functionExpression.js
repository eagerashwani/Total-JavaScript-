// function expression --> store function in a variable

function sayHelloWorld(){
    console.log("Welcome to my world");
} // --> This is function declaration


const sayHello = function(){
    console.log("Welcome to my world");
} // --> This is function expression

sayHello();

// This is function declaration
function addTwoValues(num1, num2) {
    return num1 + num2;
}

const sumIs = addTwoValues(4,5);
console.log(sumIs);

// This is function expression

const sumTwo = function(num1, num2){
    return num1 + num2;
}

console.log(sumTwo(2,4));


// This is function declaration
function isEven(number){
    if(number%2 === 0)
        return true;
    else
        return false;
}


console.log(isEven(9));

// This is function expression

const evenHai = function(number){
    return number % 2 === 0;
}

console.log(evenHai(3));



// This is function declaration
function firstChar(myString){
    return myString[0];
}

console.log(firstChar("Ashwani"));


// This is function expression

const myChar = function(myString){
    return myString[0];
}

console.log(myChar("Ashwani"));



// This is function declaration
// Linear Search

function linearSearch(myArray, target){
    for(let i in myArray){
        if(myArray[i] === target)
            return "Index is " + i;
    }
    return -1;
}

console.log(linearSearch([1,2,3],2));


// This is function Expression

const searchMe = function(myArray, target){
    for(let i in myArray){
        if(myArray[i] === target)
            return "Index is " + i;
    }
    return -1;
}
const array = [1,2,3,4,5];
console.log(searchMe(array,5));