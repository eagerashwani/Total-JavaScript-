// How to clone an array?

// There are many ways to clone an array

let array1 = ["sub1", "sub2"];
// let array2 = ["sub1", "sub2"]; - 1 way
// let array2 = [].concat(array1); - 2nd way
// let array2 = array1.slice(0); - 3rd way
let array2 = [...array1]; // 4rth way - via spread --) most recommended

// gives pointer points to same address or not
console.log(array1 === array2);
console.log(array1);
console.log(array2);


// Concatenate arrays

let array3 = ["sub3", "sub4"];
// let array4 = ["sub3", "sub4"]; - 1 way
// let array4 = [].concat(array3, "sub5", "sub6"); - 2nd way
// let array4 = array3.slice(0).cpncate(["sub5", "sub6"]); - 3rd way
let newArray = ["sub5", "sub6"];
let array4 = [...array3, ...newArray]; // 4rth way - via spread --) most recommended

console.log(array4);