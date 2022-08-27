
let students = ["Raj", "Kunal", "Love", "Ashwani", "Kirti"];
students = ["Aakash"];
students.push("Ravneet");
console.log(students);  // op - ['Aakash', 'Ravneet']


// if we use const, we never override array

const student = ["Raj", "Kunal", "Love", "Ashwani", "Kirti"];
//student = [];  // op - Error
console.log(student);  

student.push("Nitya");
console.log(student);  // op - ['Raj', 'Kunal', 'Love', 'Ashwani', 'Kirti', 'Nitya']

// student in stack have address 0x12
// ["Raj", "Kunal", "Love", "Ashwani", "Kirti"] is in heap memory
// we not changing the address of student
// recommended - Always use const with array
// recommended - For RDT use const
