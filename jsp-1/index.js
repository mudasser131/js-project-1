const button = document.querySelector("button")
const body = document.querySelector("body")
const color = ['red', 'green', 'blue','violet', 'orange','yellow','beige']

body.style.backgroundColor = 'gray'

button.addEventListener("click",changeB)

function changeB() {


const colorIndex = parseInt(Math.random()*color.length)
body.style.backgroundColor = color[colorIndex]


}