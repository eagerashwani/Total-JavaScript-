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




