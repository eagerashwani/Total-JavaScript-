// super keyword

class Animal{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    eat(){
        return `${this.name} Is eating`;
    }

}

class Dog extends Animal {
   // we dont need to add name,age in Dog class constructor
   // we can use Animal class constructor to achieve this behaviour
   constructor(name,age,speed){
    // super keyword is used to call the constructor of 
    // its parent class to access the parent's properties and methods
    super(name,age);
    this.speed = speed;
   }

   run(){
    return `${this.name} is runs at ${this.speed} kmph`;
   }
}

// object also called as instance
// now lucky have another property named speed
// how can we add ?
const lucky = new Dog("Lucky", 1, 45);
console.log(lucky);
console.log(lucky.name);
console.log(lucky.run());