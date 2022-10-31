// select element using query selector

// Via getElementById we can only able to select elements that has id attribute

// With the help of the querySelector we can access the element same as we access in CSS(like classes and id)

const selectElement = document.querySelector('#heading');
console.log(selectElement);

// As you know that, there is unique id attribute in HTML document.
// but what about class attribute


// There are several classes in the document
// Suppose we have a navbar with 3 link in ul list
const navItem = document.querySelector('.nav-item');
console.log(navItem);
// It returns the first element that matches the .nav-item and stop further processing


// If you want all elements that have .nav-item than use querySelectorAll instead
const navItems = document.querySelector('.nav-item');
console.log(navItems); // It returns a NodeList with all 3 li elements, it kind of array but not exactly array

