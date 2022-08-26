// push, pop, shift, unshift


let students = ["Raj", "Kunal", "Love", "Ashwani"];
// array is mutable, changes saves in original array

console.log(students);
// push - add in the last
students.push("Kirti");
console.log(students);

// pop - remove last item and return it(means you can store removed item in variable)
let item = students.pop();
console.log(students, item);

// unshift - add element in the starting of array
students.unshift("Lakshay");
console.log(students);

// shift - remove element from start and return it
students.shift();
console.log(students);

// push pop is fast than unshift and shift --) find yourself --) Hint: Time complexicity