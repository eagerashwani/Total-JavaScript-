const my = "World War Hulk";

const myWorld = () => {
    //const my = "New World Order";

    const kang = () => {
        //const my = "Kang Dynasty";
        console.log("Inside ", my);
    }

    console.log("My World"); 
    console.log(my); // New World Order
    kang();

    // If you remove my variable in the kang(), than JS search my variable 
    // in the Lexical Environment (one step above)
    // than the op is - Inside New World Order
    // first JS search my variable in the kang(), if its not there than search
    // in their lexical environment
    // if you also remove my variable in line 4
    // than JS search in their one step above environment
    // than the kang() op is - Inside World War Hulk
}

myWorld();