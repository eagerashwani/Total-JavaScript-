// callback --> Take function as input and call it

function avengers(name){
    console.log("Avengers ", name);
}

function movie(callback){
    console.log("Movies here...");
    callback("Kang Dynasty");
}

movie(avengers);