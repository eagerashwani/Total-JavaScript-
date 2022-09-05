// you have to create a millions of object
// how you can do?

// by creating functions for them

function createUser(firstName, lastName, age, address, email){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    user.address = address;
    user.email = email;
    user.about = function(){
        return `${this.firstName} is ${this.age} years old`;
    }
    user.is18 = function(){
        return this.age >= 18;
    }
    return user;
}

const user1 = createUser("Ashwani", "Kumar", 24, "Delhi", "ak@ak.in");
console.log(user1);
console.log(user1.is18());