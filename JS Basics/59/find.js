// find() --> returns the value of the first element that passes a test.

const pets = ["Monkey", "Snake", "cat", "dog"];
// it takes a callback()

const ans = pets.find((string)=>string.length === 3);
console.log(ans); // op -- cat

// real life example

const users = [
    {uid: 1, firstName : "Ashwani", age : 24},
    {uid: 2, firstName : "Kunal", age : 22},
    {uid: 3, firstName : "Eddie", age : 40},
    {uid: 4, firstName : "Harish", age : 24},
];

const myUser = users.find((user)=>user.uid === 3);
console.log(myUser["firstName"]);     // op -- Eddie