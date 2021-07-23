const body = document.querySelector('body')
const btn = document.querySelector('.btn')

const colors = ['#C7CEEA', '#FFDAC1', '#E0FEFE', '#FF9AA2', '#FFFD96', '#FFFFD8', '#ADE288', '#B5EAD7', '#FFE2C8', '#957DAD', '#FDE1B8']

body.style.backgroundColor = 'thistle'
btn.addEventListener("click", randomBgColor);

function randomBgColor() {
    randomColors = parseInt(Math.random() * colors.length)
    body.style.backgroundColor = colors[randomColors]
}