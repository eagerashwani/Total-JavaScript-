// iterable
// those data structures, in which we use for of loop
// like : strings and array
// objects are not iterable

const myName = "Ashwani";
for(let i of myName){
    console.log(i); // A s h w a n i --) every letter in new line
}

const myArray = ["i1", "i2", "i3", "i4"];
for(let i of myArray){
    console.log(i);
}

const myObj = {'Key1' : 'value1', 'Key2' : 'value2'};
for(let i of myObj){
    console.log(i); // Uncaught TypeError: myObj is not iterable
}


// Array like object
// those who have length property
// accessible via index
// like string



console.log(myName.length, myName[3]);  // op - 7, 'w'