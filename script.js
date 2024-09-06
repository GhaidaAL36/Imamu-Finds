let menuBar = document.querySelector('#menu-icon');
let menu = document.querySelector('.menu');

menuBar.onclick =() => {
  menuBar.classList.toggle('bx-x');
  menu.classList.toggle('active');
};

window.onscroll = () => {
  menuBar.classList.remove('bx-x');
  menu.classList.remove('active');
};