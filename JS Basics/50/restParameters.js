// rest paramters --> allows a function to accept an indefinite number of arguments as an array

function myFun(a,b,c){
    console.log(a);
    console.log(b);
    console.log(c);

}

myFun(1,2,3);

// rest parameter
// what you do, if you have more arguments than paramteres
// eg : myFun(1,2,3,4,5,6,7,8)
// and you want to assign a = 1, b = 2 and rest to c

function myFunc(a,b,...c){
    console.log(a);  // 1
    console.log(b);  // 2
    console.log(c);  // [3, 4, 5, 6, 7, 8]

}

myFunc(1,2,3,4,5,6,7,8);


// make a function to add everything
function addAll(...numbers){
    let sum = 0;
    for(let number of numbers){
        sum += number;
    }
    return sum;

}

console.log(addAll(1,2,3,4,5));