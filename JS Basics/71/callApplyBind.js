

// call 

function favMovies(movie, rating){
    console.log(this.firstName, this.age, movie, rating)
}

const user1 = {
    firstName : "Harshit",
    age : 18,
    about : function(){
        console.log(this.firstName, this.age);
    }
}


const user2 = {
    firstName : "Mohit",
    age : 28
}

// Now, you have to call the about(), for user2
// about is not in user2, but you still have to call it
// you have to borrow the about()

user1.about();   // Harshit 18
user1.about.call(user2); // Mohit 28
user1.about.call(user1); // Harshit 18
// you have to pass object in the call(), bcz this needs it
// if you don't pass object, than it shows undefined


// you can also defined func(), outside the object line 5

favMovies.call(user1, "IronMan", 8);  // Harshit 18 IronMan 8
favMovies.call(user2, "Avengers", 9.8);  // Mohit 28 Avengers 9.8


// apply

// same as call(), internally worked on call
// the only difference is, we have to pass arguments as an array

favMovies.apply(user1, ["DaVinchi Code", 6]); // Harshit 18 DaVinchi Code 6


// bind
// bind do nothing, it just returns a function
// and whenever you need, just call it

const func = favMovies.bind(user2, "Forrest Gump", 9);
func(); // Mohit 28 Forrest Gump 9

