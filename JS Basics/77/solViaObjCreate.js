// suppose you have to add 1000 methods
// what you do
// previously, we create 1000 methods
// and also pass their reference to the function


const user1 = {
    key1 : "value1",
    key2 : "value2"
}

const user2 = {};
user2.key3 = "value3";

console.log(user2.key3);  // value 3

// now, we want to access the key1 via user2
// how can we do that?
// we have another way to create empty object

const user3 = Object.create(user1);
user3.key4 = "value4";

console.log(user3.key1);  // value1
console.log(user3);  // {key4: 'value4'}

// __proto__ and [[prototype]] are same
// but, prototype is different

console.log(user3.__proto__); // {key1: 'value1', key2: 'value2'}


