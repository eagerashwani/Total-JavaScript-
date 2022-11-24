// lets do some practice with click event

// I want to change to background and color whenever i pressed button 1

const allButtons = document.querySelectorAll('.my-buttons button')

allButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        e.target.style.backgroundColor = "yellow"
        e.target.style.color = 'black'
    })
})


// on button click i want to change body's background color
const colorBtn = document.querySelector('main button')
const body = document.body;
const spanColor = document.querySelector('span')
console.log(colorBtn);

const randomColorGenerator = () => {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)

    const myColor = `rgb(${red}, ${green}, ${blue})`;
    return myColor;
}

colorBtn.addEventListener("click", () => {
    const randomColor = randomColorGenerator();
    body.style.backgroundColor = randomColor;
    spanColor.textContent = randomColor;

})