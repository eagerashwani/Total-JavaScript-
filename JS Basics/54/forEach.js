// some important array method

// forEach()

const ages = [1,2,3,4,5];

const getAge = (age, index) => console.log(`At ${index} index, Age is ${age}`);

for(let i = 0; i<ages.length; i++){
    getAge(ages[i], i);
}

// You can acheive same output via forEach()
// forEach takes a callback

ages.forEach(getAge);

// You can also defined function in forEach
// function that has no name called anonymous function

ages.forEach(function(age, index){
    console.log(`At ${index} index, Age is ${age}`);
});

// double the ages

ages.forEach(function(age){
    console.log(`Age is ${age * 2}`);
});

// real life example

const users = [
    {firstName : "Ashwani", age : 24},
    {firstName : "Kunal", age : 22},
    {firstName : "Eddie", age : 40},
    {firstName : "Harish", age : 24},
];

users.forEach(function(users){
    console.log(users.firstName);
});

// we do this earlier
for(let user of users){
    console.log(user.firstName);
}

// forEach() is better than for of bcz for of is new