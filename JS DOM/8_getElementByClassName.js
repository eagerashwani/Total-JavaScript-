// get all elements by using get Element by class name
// get all elements by using querySelectorAll

const navItems = document.getElementsByClassName('nav-item');
console.log(navItems); // It returns a HTMLCollection (Its also an array like object, we use index and iterate over it)
console.log(navItems[0])
console.log(typeof navItems)


const navAll = document.querySelectorAll('.nav-item');
console.log(navAll); // It returns a NodeList (Its also an array like object, we use index and iterate)
console.log(navAll[1]);
