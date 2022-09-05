
function createUser(firstName, lastName, age, address, email){
    // by using below line, we don't have to
    // give the reference
    const user = Object.create(createUser.prototype);
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    user.address = address;
    user.email = email;
    return user;
}

createUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old`;
};

createUser.prototype.is18 = function(){
    return this.age >= 18;
};

createUser.prototype.movie = function(){
    return "love you 3000";
};


const user1 = createUser("Ashwani", "Kumar", 24, "Delhi", "ak@ak.in");
const user2 = createUser("Eager", "Ashwani", 24, "Delhi", "eg@ak.in");
const user3 = createUser("Anmol", "Kumar", 20, "Delhi", "an@ak.in");

console.log(user1.about());
console.log(user3.movie());