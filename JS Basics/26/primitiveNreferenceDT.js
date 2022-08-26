// primitive data type

let a = 1;
let b = a;
console.log(a);
console.log(b);
a++;
console.log("After");
console.log(a);
console.log(b);

// PDT stores in stack, two different variables are made
// one store a = 1, b = 1 bcz a = 1
// when value of a changes, it doesn't affect b
// bcz a,b are different variables in stack


// Reference Data Type

let array1 = ["item1", "item2"];
let array2 = array1;
console.log(array1);
console.log(array2);
array1.push("item3");
console.log("After");
console.log(array1);
console.log(array2);

// RDT stores in heap
// In stack array1 (pointer) has address, where the array is stored
// array2 also have same address
// both pointer points to same address
// so, when we update any one, both array shows updated
