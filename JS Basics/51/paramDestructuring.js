// paramater Destructuring --> 

// most used in react
// use with objects

// we used this till now
const person = {
    firstName : "Ashwani",
    age : 24,
    gender : "male"
}

const getDetails = obj => {
    console.log(obj.firstName);
    console.log(obj.gender);
    console.log(obj.age);

}

getDetails(person);

// params destructuring

const printDetails = ({firstName, age}) => {
    console.log(firstName);
    console.log(age);
}

printDetails(person);

// in line 23 two new variables firstName and age is made