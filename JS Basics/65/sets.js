// sets (iterable)
// store data
// can store heterogenous elements
// also have its own methods
// NO index based accessing
// Order is not guranteed
// unique items only(no duplication allowed)


// one way to store data
// const numbers = new Set([1,2,4]);

// another way
const myArray = ["i1", "i2", "i3", "i4"];
const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(myArray);
mySet.add(myArray);
// ignore line 20 myArray bcz 19,20 have same address
mySet.add([11,12,13]);
mySet.add([11,12,13]);
// we can add array which have same elements
// bcz JS consider both different arrays
// bcz of different address
console.log(mySet);


// now you want to check some element is present in your set or not
if(mySet.has(1)){
    console.log("1 is present");
}else{
    console.log("1 is absent");
}

for(let set of mySet){
    console.log(set);
}

// real life example

const num2 = [1,2,3,4,4,5,6,5,7,8,1];
const uniqueElements = new Set(num2);
console.log(uniqueElements);
console.log(num2);

let len = 0;
for(let i of uniqueElements){
    len++;
}
console.log(len);