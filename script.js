const colorButton = document.getElementById('colorButton')
const body = document.getElementById('body')
const circle = document.getElementById('circle')
const square = document.getElementById('square')
const triangle = document.getElementById('triangle')
const hi = document.getElementById('text')
const hello = document.getElementById('hello')
const lol = document.getElementById('lol')
let currentColor = 0
let currentText = 0

colorButton.addEventListener('click', () =>{
    switch (currentColor) {
    case 0:
    body.style.backgroundColor = 'green'
    circle.style.backgroundColor = 'red'
    square.style.backgroundColor = 'transparent'
    currentColor = 1
    break
    case 1:
    body.style.backgroundColor = 'yellow'
    circle.style.backgroundColor = 'transparent'
    triangle.style.backgroundColor ='red'
    currentColor = 2
    break
    case 2:
    body.style.backgroundColor = 'blue'
    triangle.style.backgroundColor = 'transparent'
    square.style.backgroundColor ='red'
    currentColor = 0
    break
}
})
colorButton.addEventListener('click', () =>{
    switch (currentText) {
        case 0:
        hi.style.fontSize = '16px'
        hello.style.fontSize = '16px'
        lol.style.fontSize = '16px'
        currentText = 1
        break
        case 1:
        hi.style.fontSize = '24px'
        hello.style.fontSize = '24px'
        lol.style.fontSize = '24px'
        currentText = 2
        break
        case 2:
        hi.style.fontSize = '16px'
        hello.style.fontSize = '16px'
        lol.style.fontSize = '16px'
        currentText = 3
        break
        case 3:
        hi.style.fontSize = '12px'
        hello.style.fontSize = '12px'
        lol.style.fontSize = '12px'
        currentText = 0
        break
    }
})
