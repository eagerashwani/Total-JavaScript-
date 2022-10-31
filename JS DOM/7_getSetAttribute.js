// get and set attribute

const link = document.querySelector('a');
console.log(link.getAttribute('href')); // #home (Human readable format)

// I dont want # 
console.log(link.getAttribute('href').slice(1));

// Lets set the attribute
link.setAttribute('href', 'https://github.com');
console.log(link.getAttribute('href'));