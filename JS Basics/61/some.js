// some() --> If any single element satisfies the callback() 
//than it return true

const numbers = [2,4,6,8,9];
const ans = numbers.some(number => number % 2 !== 0);
console.log(ans);  // op - true

const userCart = [
    {productId : 1, productName : "Keyboard", price : 800},
    {productId : 2, productName : "Mouse", price : 200},
    {productId : 3, productName : "Monitor", price : 10000},
    {productId : 4, productName : "Mic", price : 31000},
];

// is there any item > 100000
const myAns = userCart.some(user => user.price > 100000);
console.log(myAns); // op - false
