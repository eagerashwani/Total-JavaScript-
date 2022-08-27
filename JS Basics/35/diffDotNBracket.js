// Difference between dot and bracket

const person = {
    name : "Ashwani",
    age : 24,
    student : false,
    movies : [
        "Forrest Gump",
        "IronMan",
        "Avengers Endgame"
    ],
    "my salary" : 500000
}; 
// How can you access a key like this : my salary

console.log(person["my salary"]); 
// 1st diff : you can't access "my salary via dot notation"


// 2nd diff 

const key = "phone";
// now you want phone as your key in the person

person[key] = "hello@abc.in";
console.log(person);
