const button = document.querySelector("button")
const body = document.querySelector("body")
const color = ['red','green','blue','yellow','pink','black']

body.style.backgroundColor = 'violet'
button.addEventListener('click',changeB)

function changeB() {
    // Change color with random click
    const colorIndex = parseInt(Math.random()*color.length)
    body.style.backgroundColor = color[colorIndex]
} 
