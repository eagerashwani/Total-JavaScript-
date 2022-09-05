// class keyword
// 2015/ ES6
// classes are fake

class CreateUser{
    constructor(firstName, lastName, age, address, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.address = address;
        this.email = email;
    }
    about(){
        return `${this.firstName} is ${this.age} years old`;
    };
    is18(){
        return this.age >= 18;
    };
    movie(){
        return "love you 3000";
    };
}

// Internally above class works like folder 80


const user1 = new CreateUser("Ashwani", "Kumar", 24, "Delhi", "ak@ak.in");
const user2 = new CreateUser("Eager", "Ashwani", 24, "Delhi", "eg@ak.in");
const user3 = new CreateUser("Anmol", "Kumar", 20, "Delhi", "an@ak.in");

console.log(user1.firstName);
console.log(user2.is18());
console.log(Object.getPrototypeOf(user1));  // {constructor: ƒ, about: ƒ, is18: ƒ, movie: ƒ}



// Practice
class Animal{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    eat(){
        return `${this.name} Is eating`;
    }

}

const animal1 = new Animal("hobbit", 1);
console.log(animal1.name);
console.log(animal1.eat());


// suppose you have to make same class with named Dog
// one way is copy paste the Animal class code
// other is Inheritance

class Dog extends Animal {

}

// there is nothing in Dog class
// but Dog extends Animal
// so with the help of Anmial constructor
// lucky object is created

const lucky = new Dog("Lucky", 1);
console.log(lucky);
console.log(lucky.eat());

// Dog is sub class
// Animal is base class