// getters and setters

class Person {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }

    // for setter
    set fullName(fullName){
        // below line split the fullname when space arrived
     //   fullName.split(" "); // something like this [Ashwani, Kumar]
     const [firstName, lastName] = fullName.split(" ");
     this.firstName = firstName;
     this.lastName = lastName;
    }
}

const person1 = new Person("Ashwani", "Kumar", 24);
//console.log(person1.fullName());

// but I want to use fullName as property not like a function
// I want this person1.fullName not person1.fullName()

// just add get in front of fullName(){}
// now the line 16, gives error
// person1.fullName is not a function
console.log(person1.fullName);

person1.fullName = "Elizabeth Olsen";
console.log(person1);