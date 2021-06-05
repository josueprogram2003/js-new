// const title = document.getElementById("title");

// title.textContent = 'Dom'

//2da forma
// const title = document.querySelector(".title");
// const span = document.getElementById("title").querySelector("span");


//1ra forma 

const paragraph = document.querySelector('.paragraph');
const span = paragraph.querySelector('span');
console.log(span.textContent);
const paragraphs = document.querySelectorAll('.paragraph');

const paragraphsSpread = [...document.querySelectorAll('.paragraph')];
const paragraphsArray = Array.from(document.querySelectorAll('.paragraph'));

paragraphs[0].style.color = 'red';

//Un node List no es un array la verificacion se hace con map

// paragraphs.map(p => p.style.color = 'green');

// paragraphsSpread.map(p=>p.style.color = 'green');
paragraphsArray.map(p=>p.style.color = 'blue');

console.log(paragraphs)