const menu = document.getElementById('nav-elements');
const menuOpenClose = document.getElementById('menu');
const illustration = document.querySelector('.illustration-container');

/* pop up variables */



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

navItems.forEach((element) => {
  element.addEventListener('click', togglerMenu);
});

const modalData = [
  {
    num: 0,
    name: 'Multi-Post Stories',
    languages: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    img: './assest/Img-Placeholder.png',
  },
  {
    num: 1,
    name: 'Profesional Art Printing Data',
    languages: ['HTML', 'Bootstrap', 'Ruby'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur cumque odit nostrum expedita, a dolor soluta explicabo magni repellendus, est officiis enim amet, provident praesentium impedit aut? Tempore, totam enim!',
    img: 'https://images.unsplash.com/photo-1639413665566-2f75adf7b7ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
  },
  {
    num: 2,
    name: 'Weather App',
    languages: ['HTML', 'Bootstrap', 'Ruby'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur cumque odit nostrum expedita, a dolor soluta explicabo magni repellendus, est officiis enim amet, provident praesentium impedit aut? Tempore, totam enim!',
    img: 'https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    num: 3,
    name: 'Project Showcase',
    languages: ['HTML', 'Bootstrap', 'Ruby'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur cumque odit nostrum expedita, a dolor soluta explicabo magni repellendus, est officiis enim amet, provident praesentium impedit aut? Tempore, totam enim!',
    img: 'https://images.unsplash.com/photo-1639398948599-051840e7bdfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    num: 4,
    name: 'Pomodoro',
    languages: ['HTML', 'Bootstrap', 'Ruby'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur cumque odit nostrum expedita, a dolor soluta explicabo magni repellendus, est officiis enim amet, provident praesentium impedit aut? Tempore, totam enim!',
    img: 'https://images.unsplash.com/photo-1639413665566-2f75adf7b7ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
  },
  {
    num: 5,
    name: 'Calculator',
    languages: ['HTML', 'Bootstrap', 'Ruby'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur cumque odit nostrum expedita, a dolor soluta explicabo magni repellendus, est officiis enim amet, provident praesentium impedit aut? Tempore, totam enim!',
    img: 'https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    num: 6,
    name: 'Landing Page',
    languages: ['HTML', 'Bootstrap', 'Ruby'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur cumque odit nostrum expedita, a dolor soluta explicabo magni repellendus, est officiis enim amet, provident praesentium impedit aut? Tempore, totam enim!',
    img: 'https://images.unsplash.com/photo-1639398948599-051840e7bdfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  }
];

const modalDisplayBtn = document.querySelectorAll('.display-modal');

const modal = document.querySelector('.modal-container');
const modalClose = document.querySelector('.modal-close-btn');
const body = document.getElementById('body');

function closeModal () {
  modal.style.opacity = 0;
  body.style["overflow-y"] = 'scroll';
}

modalDisplayBtn.forEach((btn) => {
  btn.addEventListener('click', ()=>{
    if(btn.classList.contains('project1')){
      i = 0;
    } else if (btn.classList.contains('project2')) {
      i = 1;
    } else if (btn.classList.contains('project3')) {
      i = 2;
    } else if (btn.classList.contains('project4')) {
      i = 3;
    } else if (btn.classList.contains('project5')) {
      i = 4;
    } else if (btn.classList.contains('project6')) {
      i = 5;
    } else if (btn.classList.contains('project7')) {
      i = 6;
    }
  displayModal();
  });
});

modalClose.addEventListener('click', closeModal);

const modalHeader = document.querySelector('.modal-header');
const modalList = document.querySelector('.modal-list');
const modalImg = document.getElementById('modal-img');
const modalDescription = document.querySelector('.modal-description');

let i;
let listItem;
let langArr;

function modalContent() {
  modalHeader.textContent = modalData[i].name;
  modalImg.src = modalData[i].img;
  modalDescription.textContent = modalData[i].description;

  langArr = modalData[i].languages;
  
  langArr.forEach(item => {
    
    listItem = document.createElement('li');
    listItem.className = 'lang-list';
    listItem.textContent = item;
    modalList.appendChild(listItem);
    console.log(listItem.textContent = item);
});

}


function displayModal() {
  modal.style.opacity = 1;
  modalContent();
}