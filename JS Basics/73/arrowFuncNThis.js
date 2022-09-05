// arrow func takes this from their surronding

const user1 = {
    firstName : "Harshit",
    age : 18,
    about : () => {
        console.log(this.firstName, this.age);  // undefined undefined
    }
}

user1.about();

// for arrow fun, this is one step above(surronding)