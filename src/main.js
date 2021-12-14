const menu = document.querySelector('.mobile-nav-elements-container');
const main = document.getElementById('main');
const menuItem = document.getElementById('menu-icon');

function toggleMenu() {
  if (menuItem.classList.contains('menu')) {
    menu.style.display = 'block';
    menuItem.classList.remove('menu');
    menuItem.classList.add('close');
    main.style.opacity = 0;
  
  } else if (menuItem.classList.contains('close')) {
    menu.style.display = 'none';
    menuItem.classList.remove('close');
    menuItem.classList.add('menu');
    main.style.opacity = 1;
  }
}

menuItem.addEventListener('click', toggleMenu);