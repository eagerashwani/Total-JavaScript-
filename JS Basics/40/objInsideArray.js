// object inside array
// very useful, in real world application

const users = [
    {userId : 1, firstName : "Ashwani", gender : "male"},
    {userId : 2, firstName : "Kunal", gender : "male"},
    {userId : 3, firstName : "Saurav", gender : "male"},
    {userId : 4, firstName : "Alivia", gender : "female"},
    {userId : 5, firstName : "Parnika", gender : "female"},
];

console.log(users);

for(let user of users){
    console.log(user);
    console.log(user.firstName);
}