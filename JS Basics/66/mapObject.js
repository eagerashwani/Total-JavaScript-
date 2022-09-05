// map object


// difference b/w Map and objects
// we can store any type of key 
// like: {}, "", number 

// store data as key value pair like objects
// Map is iterable
// store data in ordered fashion
// duplicate keys are not allowed like objects


const person = new Map();
person.set("firstName", "Ashwani");
person.set('age', 7);
person.set(1, "one");
person.set([1,2,3], "myArray");
person.set({'k1':'v1'}, "keyAsObject");
console.log(person);
console.log(person.get(1));

for(let key of person.keys()){
    console.log(key, typeof key); // give all the keys
}

// In object we use for in loop 
// but in map object we use for of loop

for(let [key,value] of person){
 //   console.log(key, Array.isArray(key));   // gives op as key value pair in array
    console.log(key,value);  // firstName Ashwani --) gives all key value

}


// you can store data in map like this also
const myNewPerson = new Map([['firstName', 'Ashwani'], [1, 'one']]);
console.log(myNewPerson);

// suppose you have an object and 
// you have to add data, not in the object(person1), without using object, so we use Map

const person1 = {
    id : 1,
    firstName : "Ashwani"
}

const otherInfo = new Map();
otherInfo.set(person1, {age: 23, gender : "Male"});
console.log(otherInfo);
// op - key : {id: 1, firstName: 'Ashwani'}
//     value : {age: 23, gender: 'Male'}

console.log(person1.id);  // op - 1
console.log(otherInfo.get(person1).age);  // op - 23