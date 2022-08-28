// spread operator in object

const obj1 = {
    key1 : "value1",
    key2 : "value2"
}

const obj2 = {
    key3 : "value3",
    key4 : "value4"
}

const myObj = {...obj1, ...obj2};
console.log(myObj);

// note : If you add one more key value pair, with same key that already exist in object
// than the latest one will be taken
// eg : If we add key1 : "value100" in obj2 than
// the myObj's key1 is "value100" not value1

// Add new key value pair in myObj like that {...obj1, ...obj2, key23 : "value23"}

const newObj = {..."abc"};
console.log(newObj); // op - {0: 'a', 1: 'b', 2: 'c'}

// same with array
