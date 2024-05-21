const button = document.querySelector('.main-navigation__toggle');
const menu = document.querySelector('.main-navigation');
const body = document.querySelector('.page__body');

body.classList.remove('nojs');

button.addEventListener('click', () => {
  menu.classList.toggle('main-navigation--opened');
});
