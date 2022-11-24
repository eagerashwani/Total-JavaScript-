console.log('script start ..................');

const allButtons = document.querySelectorAll(".my-buttons button")

allButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        let n = 0;
        for(let i=0; i<=100000000; i++){
            n += i;
        }
        console.log(e.currentTarget.textContent, n);
    })
})

let outerVar = 0;
for(let i = 0; i<= 100000000; i++){
    outerVar += i;
}

console.log("value of outer variable is", outerVar)

console.log('script end ..................');

// Its a theory concept, look again and make notes
