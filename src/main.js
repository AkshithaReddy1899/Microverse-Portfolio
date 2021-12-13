const menu = document.querySelector('.nav-elements');
const navList = document.querySelector('.nav-list');
const menuItem = document.querySelector('.menu-container');
const line = document.querySelector('.line');

function toggleMenu() {
  if (menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu');
    menu.style.display = 'none';
  } else {
    menu.classList.add('showMenu');
    menu.style.display = 'block';
  }
}

menuItem.addEventListener('click', toggleMenu);
