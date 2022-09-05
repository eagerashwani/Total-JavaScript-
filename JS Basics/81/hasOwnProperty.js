

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

// suppose you want to access the property of user1
for(let key in user1){
    //console.log(key);  // gives all property including those who are in prototype
// but you don't want prototype property
   
    if(user1.hasOwnProperty(key)){
        console.log(key);
    }
}