/* 

const heading = document.querySelector('h1')
heading.innerText='DOM: Document Object Model'

console.log(heading)

const list = document.querySelectorAll('li')

for (let i=0;i<list.length;i++){
    const listitem=list[i]
    listitem.innerText='YOOOOO'
}

const para = document.getElementById('para')

console.log(list)
console.log(para)

para.innerText="para ka ghar"

*/

const plusBtn = document.querySelector('#increment') 
const minusBtn = document.querySelector('#decrement') 

let cntr = 0

function PlusCounter() {
    const IE= document.getElementById('Cnt')
    cntr++
    IE.innerText= cntr
}

function MinusCounter() {
    const DE= document.getElementById('Cnt')
    cntr--
    DE.innerText= cntr
}

plusBtn.addEventListener('click', PlusCounter )
minusBtn.addEventListener('click', MinusCounter )