// new keyword
// 1. this = {}
// 2. return this
// 3. no need to create link with proto


// this func is called constructor function
// convention --> if a func is a constructor func, than first letter is caps
// capital letter indicates that the func needs new keyword
function CreateUser(firstName, lastName, age, address, email){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.address = address;
    this.email = email;
}
CreateUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old`;
};

CreateUser.prototype.is18 = function(){
    return this.age >= 18;
};

CreateUser.prototype.movie = function(){
    return "love you 3000";
};


const user1 = new CreateUser("Ashwani", "Kumar", 24, "Delhi", "ak@ak.in");
const user2 = new CreateUser("Eager", "Ashwani", 24, "Delhi", "eg@ak.in");
const user3 = new CreateUser("Anmol", "Kumar", 20, "Delhi", "an@ak.in");

console.log(user1.about());
console.log(user3.movie());