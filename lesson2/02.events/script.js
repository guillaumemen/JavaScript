'use strict'

const btn = document.querySelector('#js-btn');
btn.addEventListener('click' , (event) => {
    console.log('clicked' , event);
});

window.addEventListener('contextmenu' , (event) => {
    event.preventDefault();
})

let isClickedTwice = false;
const grayBtn = document.querySelector('#js-gray-btn');
grayBtn.addEventListener('click', () => {
    isClickedTwice = !isClickedTwice;
    if (isClickedTwice) {
        grayBtn.style.backgroundColor = 'green'
    } else {
        grayBtn.style.backgroundColor = 'gray';
    }

});

const hoveredbtn = document.querySelector('#hovered-btn');
hoveredbtn.addEventListener('mouseenter', () => {
    hoveredbtn.style.backgroundColor = 'red';
})

hoveredbtn.addEventListener('mouseleave', () => {
    hoveredBtn.style.backgroundColor = 'inherit';
})

const myForm = document.querySelector('js-form');
const myinput = document.querySelector('#js-text');

myInput.addEventListener('keyup', () => {
    console.log('input value : ', myInput.value);
})

myForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert(myInput.value);
})