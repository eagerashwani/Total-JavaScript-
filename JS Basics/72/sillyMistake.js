const user1 = {
    firstName : "Harshit",
    age : 18,
    about : function(){
        console.log(this.firstName, this.age);
    }
}

// never do like this
const fun = user1.about;
fun(); // undefined undefined
// bcz this required object
// line 10, just paste func(){.....} to fun 
// so, this have no idea what to do 

// if you still have to store reference in the variable 
// than use bind()

