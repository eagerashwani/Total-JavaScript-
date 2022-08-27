// for loop in array

let students = ["Raj", "Kunal", "Love", "Ashwani", "Kirti"];


// Most important property of array is length
console.log(students.length);

// with the help of indexes, we get particular item
console.log(students[2]);


for(let i = 0; i<students.length; i++){
    console.log(students[i]);
}

// make a new array having students data in uppercase

let newStudents = [];

for(let i=0; i<students.length; i++){
    newStudents.push(students[i].toUpperCase());
}

console.log(newStudents);