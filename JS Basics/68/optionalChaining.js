// optional chaining

const person = {
    firstName : "Ashwani",
    address : {
        houseNo : 21,
        state : 'Delhi'
    }
}

// now, how we can access person property
console.log(person.firstName);
console.log(person.address.houseNo);

// now, suppose we dont have address right now
// but it come in future
// if we use line 13, than it gives error

// we don't want error

console.log(person?.firstName);
console.log(person?.address?.houseNo);
