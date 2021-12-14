const menu = document.getElementById('nav-elements');

const checkBox = document.getElementById('toggler');

checkBox.addEventListener( 'change', function togglerMenu () {
  if (this.checked) {
    menu.style.opacity = 1;
  } else {
    menu.style.opacity = 0;
  }
});