// Array is reference type(means object)
// Ordered collection of items(means access via index)
// store any data type in an array
// Arrays are mutable(it changes the array)


let students = ["Raj", "Kunal", "Love", "Ashwani"];
console.log(students);

let mixed = ["YouTube", 12, true, null, undefined];
console.log(mixed[3]);

students[2] = "Kirti";
console.log(typeof students, students);

// students is an object
// There are many objects in JS
// How can you know that students is an array

console.log(Array.isArray(students));  // op - true

let obj = {} // object literal
console.log(typeof obj); //  object


