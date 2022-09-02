// reduce

const numbers = [1,2,3,4,5,6];

// if you want to initialize accumulator with a value
// than give your value just after callback() look line 11
// now, the first call start as 100 1 = 101
// now continue from line 15
const sum = numbers.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue;
}, 100);

console.log(sum);

// accumulator , currentValue,  return
// 1                  2           3
// 3                  3           6
// 6                  4           10
// 10                 5           15
// 15                 6           21


const userCart = [
    {productId : 1, productName : "Keyboard", price : 800},
    {productId : 2, productName : "Mouse", price : 200},
    {productId : 3, productName : "Monitor", price : 18000},
    {productId : 4, productName : "Mic", price : 19000},
];

const totalAmount = userCart.reduce((totalPrice, {price}) =>  totalPrice + price, 0);

console.log(totalAmount);

// totalPrice,   price,   return
// 0             800        800
// 800           200        1000
// 1000          180000     190000
// 19000         190000     380000