// most important array method

// map() --> Returns a new array
// if return is not there in callback(), than newArray have undefined

const numbers = [1,2,3,4,5];

function square(number){
   return number * number;
    // console.log(number * number);
}

const newArray = numbers.map(square);
console.log(newArray);

// if we not return anything in line 9
// and just console.log() --> op - 1,4,9,16,25 in new lines
// and line 13 prints -->  [undefined, undefined, undefined, undefined, undefined]

const users = [
    {firstName : "Ashwani", age : 24},
    {firstName : "Kunal", age : 22},
    {firstName : "Eddie", age : 40},
    {firstName : "Harish", age : 24},
];

const firstNames = users.map((user)=> user.firstName);
console.log(firstNames);  // op -  ['Ashwani', 'Kunal', 'Eddie', 'Harish']