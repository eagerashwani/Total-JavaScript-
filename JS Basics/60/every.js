// every --> returns true if the function returns true for all elements.
// returns false if the function returns false for one element.

const numbers = [2,4,6,8,10];

// all numbers are even
const ans = numbers.every(number => number % 2 === 0);
console.log(ans);



const userCart = [
    {productId : 1, productName : "Keyboard", price : 800},
    {productId : 2, productName : "Mouse", price : 200},
    {productId : 3, productName : "Monitor", price : 18000},
    {productId : 4, productName : "Mic", price : 31000},
];

// all product price below 20000
const isTrue = userCart.every(user => user.price < 20000);
console.log(isTrue);