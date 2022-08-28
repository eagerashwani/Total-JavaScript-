

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

// Iterate objects

// 1st way --> for in loop

for(let key in person){
   //console.log(key);     // name, age, student, movies, my salary
   // console.log(person[key]);   // values dega
   // console.log(person.key); // undefined x3
   // console.log(key, " : " ,person[key]);  // key value pair
    console.log(`${key} : ${person[key]}`);  // key value pair
}


// 2nd way - Object.keys

console.log(Object.keys(person));  // op - ['name', 'age', 'student', 'movies', 'my salary']

for(let key of Object.keys(person)){
    console.log(key, " : " , person[key]);
}