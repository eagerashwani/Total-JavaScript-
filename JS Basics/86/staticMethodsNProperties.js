// static methods and properties

// there are methods you have no need to create object to call them

class Person {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    // static methods
    static personInfo(){
        return 'Person Info static method';
    }

    // static property
    static desc = "Description of static property";

    eat(){
        return `${this.firstName} is eating`;
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(fullName){
     const [firstName, lastName] = fullName.split(" ");
     this.firstName = firstName;
     this.lastName = lastName;
    }
}

const person1 = new Person("Ashwani", "Kumar", 2);
//console.log(person1.personInfo()); // gives error
// person1.personInfo is not a function


// you can call static method by class name 
const info = Person.personInfo();
console.log(info);
console.log(Person.desc);