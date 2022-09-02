// sort -  sorts values as strings/sorts an array alphabetically

// it changes the original array

const numbers = [32,644,2367,1200,5000];


// it store array as string and 
//sort on the basic of ASCII code of first letter
numbers.sort();
console.log(numbers); 

const userNames = ['Ashwani', 'ashu', 'lucky', 'tony', 'Bucky'];
userNames.sort();
console.log(userNames);  // op -  ['Ashwani', 'Bucky', 'ashu', 'lucky', 'tony']

// first come capital letters and small letters 
// bcz ASCII value of A is less than a
// It sort in dictionary format


// If you want to sort numbers via sort()
const myNum = [1,2,55,30,60];
myNum.sort((a,b) => a-b); // this callback() sort in asc order
// if you want desc order, than b-a
console.log(myNum);

// a            b             +/-
// 1            2             -
// if -ve, than put a first
// if +ve, than put b first

// real life example
// sort price HighToLow

const productsList = [
    {productId : 1, productName : "Keyboard", price : 800},
    {productId : 2, productName : "Mouse", price : 200},
    {productId : 3, productName : "Monitor", price : 18000},
    {productId : 4, productName : "Mic", price : 19000},
];

const highToLow = productsList.slice(0).sort((a,b)=>a.price - b.price);
const lowToHigh = productsList.slice(0).sort((a,b)=>b.price - a.price);

console.log(highToLow);
console.log(lowToHigh);

// If we don't use slice, than sort() changes the original productsList
// that's why we clone it