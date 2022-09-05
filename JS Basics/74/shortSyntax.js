

const user1 = {
    firstName : "Harshit",
    age : 18,
    about : function(){
        console.log(this.firstName, this.age);  // undefined undefined
    }
}

const user2 = {
    firstName : "Mohit",
    age : 8,
    about(){
        console.log(this.firstName, this.age);  // undefined undefined
    }
}

// user1 and user2's about() works same

user1.about();
user2.about();