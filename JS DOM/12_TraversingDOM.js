// To get root node
const rootNode = document.getRootNode();
console.log(rootNode); // #document

// To get child nodes of document
const htmlElementNode = rootNode.childNodes;
console.log(htmlElementNode); // It returns NodeList
console.log(htmlElementNode[1]); // html element

// get child nodes of html element
const htmlChildNode = htmlElementNode[1];
console.log(htmlChildNode.childNodes); // NodeList(3) [head, text, body]

const headElementNode = htmlChildNode.childNodes[0];
console.log(headElementNode);
const textNode = htmlChildNode.childNodes[1];
console.log(textNode);
const bodyElementNode = htmlChildNode.childNodes[2];
console.log(bodyElementNode);

// parent of head element
console.log(headElementNode.parentNode)

// sibling relationship
// want to see head's sibling and next sibling 
console.log(headElementNode.nextSibling);  // text node
console.log(headElementNode.nextSibling.nextSibling);   // body node

// lets see whats inside the text node
console.log(headElementNode.nextSibling);  // text node
// in the browser, text node object has text content and data properties with value "\n    "(new line and some spaces)


// Question - Browser used DOM Tree to show whats inside the html. And there are new lines and spaces
// How you can see them?

// By default browser set whitespace to normal


{/* <style>
*{
    white-space: normal;
}
</style> */}
// if you want to see all whitespaces and new lines, change it to `pre`
{/* <style>
*{
    white-space: pre;
}
</style> */}


// Sometimes you have add many new lines, than its difficult to predict what's next
// To tackle this, we have a property called nextElementSibling
console.log(headElementNode.nextElementSibling);  // it returns the body element


// Exercise
const h2element = document.getRootNode().childNodes[1].childNodes[2].childNodes[1].childNodes[1];
// you can also use querySelector instead above line
// const h2element = document.querySelector('h2');
const h2parent = h2element.parentNode


h2parent.style.backgroundColor = "orange";

// we can use querySelector at any level (like in head, title)

// =================================================================

// sometimes we don't want text nodes(new line and whitespace)
const container = document.querySelector(".mainhead");
console.log(container.children) // it return HTMLCollection, only elements no text nodes