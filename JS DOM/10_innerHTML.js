// innerHTML

{/* <header>
<h2 id="heading">My Heading <span style="display: none;">Hello Span</span></h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, alias.</p>
</header> */}

// everything between header tag is a innerHTML.
// all child tag of a parent tag is innerHTML.

const myhead = document.querySelector('.mainhead')
myhead.innerHTML = '<h1> HTML changed by innerHTML</h1>'

// if you want to add more innerHTML
myhead.innerHTML += '<p class= \"btn\">I am para</p>'
console.log(myhead.innerHTML);

// \" means " 
