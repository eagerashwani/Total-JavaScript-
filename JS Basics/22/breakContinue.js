// break keyword, stops the execution and get outside from the block

for(let i = 0; i<=10; i++){
    if(i === 7)
        break;
    console.log(i);  // op - 0 to 7
}


// continue keyword, bring back to the condition(or skip the continue check)

for(let i=0; i<=10; i++){
    if(i===6)
        continue;
    console.log(i); // op - 0 to 10 without 6
}