// store methods in different objects

// suppose there are 2 million user 
// and the function about, is18 create 2 million times
// and consume more memory
// but we need only one time
// store that methods in different object

const userMethods = {
    about : function(){
        return `${this.firstName} is ${this.age} years old`;
    },
    is18 : function(){
        return this.age >= 18;
    },
    movie : function(){
        return "love you 3000";
    }
}

function createUser(firstName, lastName, age, address, email){
    // by using below line, we don't have to
    // give the reference
    const user = Object.create(userMethods);
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    user.address = address;
    user.email = email;
    return user;
}

const user1 = createUser("Ashwani", "Kumar", 24, "Delhi", "ak@ak.in");
const user2 = createUser("Eager", "Ashwani", 24, "Delhi", "eg@ak.in");
const user3 = createUser("Anmol", "Kumar", 20, "Delhi", "an@ak.in");

console.log(user1.about());
console.log(user3.about());