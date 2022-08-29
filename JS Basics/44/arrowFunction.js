// arrow function

const sayHello = () => {
    console.log("Welcome to my world");
} // --> This is function expression

sayHello();


// This is arrow function 

const sumTwo = (num1, num2) => {
    return num1 + num2;
}

console.log(sumTwo(2,4));

// If function have only one parameter than in arrow function () not required
const evenHai = (number) => {
    return number % 2 === 0;
}

console.log(evenHai(3));


// This is arrow function 

// If function have only one line than remove {} and return statement

const myChar = myString =>  myChar[0];


console.log(myChar);



// This is arrow function 

const searchMe = (myArray, target) => {
    for(let i in myArray){
        if(myArray[i] === target)
            return "Index is " + i;
    }
    return -1;
}
const array = [1,2,3,4,5];
console.log(searchMe(array,5));