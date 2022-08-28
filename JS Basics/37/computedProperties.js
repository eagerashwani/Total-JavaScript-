
const key1 = "myKey1";
const key2 = "myKey2";

const value1 = "myValue1";
const value2 = "myValue2";

// You have to make object(key : Value) with the values of above variables eg line 24 op

const myObj = {
    key1 : value1,
    key2 : value2
}

console.log(myObj); // op - {key1: 'myValue1', key2: 'myValue2'}

// but we dont want key1 and key2 instead we want mykey1 and mykey2
// to achieve this

const objNow = {
    [key1] : value1,
    [key2] : value2
}
console.log(objNow); // op - {myKey1: 'myValue1', myKey2: 'myValue2'}