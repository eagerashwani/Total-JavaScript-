// for in loop --> It give index


const students = ["Raj", "Kunal", "Love", "Ashwani", "Kirti"];
const newStudents = [];
for(let index in students){
    newStudents.push(students[index].toUpperCase());
}
console.log(newStudents);


// we use normal for loop and for of loop very much in JS
// while and for in loop, not that much