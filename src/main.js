const menu = document.getElementById('nav-elements');

function toggleMenu() {
  const checkBox = document.getElementById("toggler");

  if (checkBox.checked === true) {
    menu.style.opacity = 1;
  } else {
    menu.style.opacity = 0;
  }
}
