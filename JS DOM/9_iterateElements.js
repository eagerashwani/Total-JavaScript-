// I want to change the text color to white and background color to black

// we also have a method named getElementsByTagName
const navItems = document.getElementsByTagName('a');
console.log(navItems) // It also returns a HTMLCollection

// loop
// simple for loop
// for of loop
// forEach 

// we can't use forEach to iteration through HTMLCollection

for(let i = 0; i < navItems.length; i++){
    const navItem = navItems[i];
    navItem.style.backgroundColor = 'black';
    navItem.style.color = 'white';
}

for(let item of navItems){
    item.style.backgroundColor = 'orange';
    item.style.color = 'white';
}

// if you want to use foreach than first convert HTMLCollection in array
// instead of const in navItems use let

// navItems = Array.from(navItems);
// navItems.forEach(navItem => {
//     navItem.style.backgroundColor = 'purple';
//     navItem.style.color = 'white';
// })

// NodeList
// In nodeList you can use all 3 loops
// simple for loop
// for of loop
// for each
// you can also change NodeList into an array
// same as above