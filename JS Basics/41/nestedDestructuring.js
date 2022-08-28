
const users = [
    {userId : 1, firstName : "Ashwani", gender : "male"},
    {userId : 2, firstName : "Kunal", gender : "male"},
    {userId : 3, firstName : "Saurav", gender : "male"},
    {userId : 4, firstName : "Alivia", gender : "female"},
    {userId : 5, firstName : "Parnika", gender : "female"},
];

const [user1, user2, user3] = users;
console.log(user1); // op - {userId: 1, firstName: 'Ashwani', gender: 'male'}
console.log(user2);
console.log(user3);

// but, we want fistname of userId 1, and userId of userId3, and firstname of userId 5

const [{firstName:newVar}, , {userId}, , {firstName}] = users;
console.log(newVar); // Ashwani
console.log(userId); // 3
console.log(firstName); // Parnika

// you cant use same variable name (line 17) like firstname in userId 1 and 5
