// same methods in sub class

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
   constructor(name,age,speed){
    super(name,age);
    this.speed = speed;
   }

   eat(){
    return `${this.name} eats Royal Canin`;
   }

   run(){
    return `${this.name} is runs at ${this.speed} kmph`;
   }
}

const lucky = new Dog("Lucky", 1, 45);
console.log(lucky);
console.log(lucky.name);
console.log(lucky.run());
// eat() is not in the Dog class,
// so, JS look into its parent class
// if eat() present in Dog class
// than the eat() of Dog is called
console.log(lucky.eat());
