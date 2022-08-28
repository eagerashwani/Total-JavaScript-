// You have to store values of associated keys of object in variables

const team = {
    plays : "Cricket",
    teamName : "Chennai",
    captain : "Dhoni",
    winner : 5
}

const var1 = team.plays;
const var2 = team["teamName"];
console.log(var1, var2);

// object destructring

const {plays, teamName, ...hereAll} = team;  // goto line 27
console.log(plays, teamName);
console.log(hereAll); // op - {captain: 'Dhoni', winner: 5}

// note : names of variable must be same as key of object

// if you want different variables name

const {captain : myCap, winner : wins} = team;
console.log(myCap, wins);

// now you want only 2 variables and all others in a seprate object
// const {plays, teamName, ...hereAll} = team;
// hereAll contain everything as object except all keys before that

