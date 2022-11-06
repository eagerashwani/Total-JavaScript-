// Lets work with css classes with the help of javascript

const header = document.querySelector(".mainsection");
console.log(header.classList) // DOMTokenList(2) ['mainsection', 'xyz', value: 'mainsection xyz']


// you can add css classes like this
header.classList.add('bg-dark');


// dont forget to link css file 

// remove the css classes
header.classList.remove('bg-dark')

// check if a class exists or not
const ans = header.classList.contains("bg-dark");
console.log(ans)

// toggle if the class exists, remove it else add it
header.classList.toggle('bg-dark');


// browser process css from top to bottom
// if you change the order in .css than according to the specificity classes applied.
// to more read about css specificity