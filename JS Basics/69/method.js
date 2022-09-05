// method - function inside object

const person = {
    firstName : "Mohit",
    age : 24,
    about : function(){
        console.log('Ashwani is my name and age is 24');

        // the below line still gives error
       // console.log(`${firstName} is my name and age is ${age}`);

       // we have to use this
        console.log(`${this.firstName} is my name and age is ${this.age}`);
        // this means whole object

        console.log(this); // op - {firstName: 'Mohit', age: 24, about: ƒ}

        
    },
}


console.log(person.about) // gives whole function
console.log(person.about()) // 'Ashwani is my name and age is 24'

// there is a problem
// if somehow firstName is change, but in the about(), firstName is still Ashwani
// goto line 9 and continue from there


// Another way 
function myInfo(){
    console.log(`My name is ${this.firstName} and age is ${this.age}`);
}


const person1 = {
    firstName : "Harsh",
    age : 13,
    aboutMe : myInfo
}
const person2 = {
    firstName : "Harish",
    age : 14,
    aboutMe : myInfo
}
const person3 = {
    firstName : "Harsita",
    age : 15,
    aboutMe : myInfo
}

person1.aboutMe();
person2.aboutMe();
person3.aboutMe();