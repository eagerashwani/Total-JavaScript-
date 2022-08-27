// arrayDestructuring -- How you can store values of array in variable

const students = ["Ram", "shyam", "Krishna", "balram"];

// let name1 = students[0];
// let name2 = students[1];
// console.log(name1);
// console.log(name2);

let [name1, name2] = students;
console.log(name1);
console.log(name2);

// name1, name2 are two different variables, so can play with them
// students array assign to variables based on their index


// If there are more elements in array than variables, 
// also than variables associated with index get value
// If there are less elements in array than variables 
// than after associated elements, other variables shows undefined

// If you want to skip an index
let [name3, , , name4] = students;
console.log(name3);
console.log(name4);

// You want to store, rest of elements in new array
let [a,b, ...newStudents] = students;
console.log(a);
console.log(b);
console.log(newStudents);