// sometimes we have to take decision based on two or more conditions

// suppose we have to print only those, whos name start with "A" and an adult

let firstName = "Ashwani";
let age = 24;

if(firstName[0] === "A" && age > 18){
    console.log("Condition satisfied");
}
else{
    console.log("Not match");
}

// && - both conditions must true

// now, we want if any one condition is true, we can print

if(firstName[0] === "f" || age >18){
    console.log("Inside if");
}
else{
    console.log("Inside else");
}

// || - only enter in else block, if both condition gives false