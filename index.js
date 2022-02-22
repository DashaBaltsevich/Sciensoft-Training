'use strict';
const button = document.querySelector('.burger'),
    burger = document.querySelector('.burger'),
    leftMenu = document.querySelector('.left__menu'),
    burgerMenu = document.querySelector('.burger__menu');

button.addEventListener('click', () => {
    burger.classList.toggle('active');
    leftMenu.classList.toggle('open');
    burgerMenu.classList.toggle('open');
});
