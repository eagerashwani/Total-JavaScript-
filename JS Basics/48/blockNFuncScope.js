// block and function scope

// let and const are block scope
// var is function scope

{
    // {}--> This is a block
    const firstName = "Ashwani";
    console.log(firstName);  // accessible 
}

// but you can't access firstName outside the block
//console.log(firstName); // Error 


// you can access value with var bcz it's function scope(means JS search variable in complete file)
{
    var lastName = "Kumar";
    console.log(lastName); // accessible
}
console.log(lastName); // accessible
{
    console.log(lastName); // accessible
}


// real example

function myProject(){
    if(true){
        let projectName = "Secret Wars";
        console.log(projectName);
    }
    console.log(projectName); // Error
    
}

myProject();

// if we use var instead of let than line 34 run without any error

// note : Don't confuse with Lexical Scope
// if projrctName is declared one step above 
// than it also run successfully.