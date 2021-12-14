const menu = document.getElementById('nav-elements');
const menuOpenClose = document.getElementById('menu');
const illustration = document.querySelector('.illustration-container');

function togglerMenu() {
  if (menuOpenClose.classList.contains('open')) {
    menu.style.opacity = 1;
    illustration.style.display = 'none';
    menuOpenClose.classList.remove('open');
    menuOpenClose.classList.add('close');
  } else if (menuOpenClose.classList.contains('close')) {
    menu.style.opacity = 0;
    illustration.style.display = 'block';
    menuOpenClose.classList.remove('close');
    menuOpenClose.classList.add('open');
  }
}

const navItems = document.querySelectorAll('.mobile-nav-list');

navItems.forEach(element => {
  element.addEventListener('click', togglerMenu);
});