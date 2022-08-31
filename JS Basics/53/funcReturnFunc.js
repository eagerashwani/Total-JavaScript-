// function returning function


function myMovie(){
    function avengers(){
        return "Avengers Endgame";
    }
    return avengers;
}

const show = myMovie();
console.log(show());

// callbacks and func returning func called Higher Order Function

const bestMovie = () => () => "Chef";

const showMe = bestMovie();
console.log(showMe());