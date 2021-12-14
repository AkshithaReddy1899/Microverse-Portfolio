const menu = document.getElementById('nav-elements');
const main = document.getElementById('main');

const checkBox = document.getElementById('toggler');

checkBox.addEventListener('change', function togglerMenu() {
  if (this.checked) {
    menu.style.opacity = 1;
  } else {
    menu.style.opacity = 0;
  }
});

let anchors = document.querySelectorAll('.active');

console.log(anchors)
/*
for(let i=0; i<anchors.length; i++){
  anchors[i].addEventListener("click", ()=>{
    main.style.opacity = 1;
  }) 
} */

anchors.forEach(link => {
  link.addEventListener('click', ()=>{
    menu.style.opacity = 0;
    main.style.opacity = 1;
    menu.style.opacity = 0;
  })
});