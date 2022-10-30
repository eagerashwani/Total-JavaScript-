// callback - function as arugument in function

function hello(callback){
    console.log("Hello World");
    callback();
}

hello(()=>{
    console.log("I am callback");
})

//? ex 2

function getNAddTwoNumbers(number1, number2, callback){
    console.log(number1,number2);
    callback(number1,number2);
}

function addTwo(number1,number2){
    console.log(number1+number2);
}

getNAddTwoNumbers(4,5,addTwo);

//? ex 3
// suppose we gave parameters as string
// than we have to handle the error

function mygetNAddTwoNumbers(number1, number2, onSuccess, onError){
    if(typeof number1 === "number" && typeof number2 === "number"){
        onSuccess(number1,number2);
    }
    else{
        onError();
    }
}

mygetNAddTwoNumbers("4",5, (number1,number2)=>{
    console.log(number1+number2);
}, ()=>{
    console.log("Data type error");
} );

// onSuccess and onError is the name of callback function
