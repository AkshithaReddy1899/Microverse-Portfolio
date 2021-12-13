let menu = document.getElementById('nav-elements');
let main = document.getElementById('main');

function toggleMenu(){ 
let checkBox = document.getElementById("toggler");

  if (checkBox.checked === true){
    menu.style.opacity = "1";
  } else {
    menu.style.opacity = "0";
  }
}
