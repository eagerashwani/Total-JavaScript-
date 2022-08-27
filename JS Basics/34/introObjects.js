// Objects 
// RDT
// Arrays are good but not sufficient
// for real world
// objects stores key value pairs
// objects don't have indexes


// create a object

const person = {
    name : "Ashwani",
    age : 24,
    student : false,
    movies : [
        "Forrest Gump",
        "IronMan",
        "Avengers Endgame"
    ]
};  
console.log(person);

// accessing 

console.log(person.age);
console.log(person["movies"]); 
// movies in "" bcz in objects, keys are stored as string
// we can use both . notation and bracket notation



// add new key value pair in object

person["job"] = "Software Engineer";
person.gender = "Male";
console.log(person);


