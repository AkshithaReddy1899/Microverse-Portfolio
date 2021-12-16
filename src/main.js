const menu = document.getElementById('nav-elements');
const menuOpenClose = document.getElementById('menu');
const illustration = document.querySelector('.illustration-container');

/* pop up variables */

const modalData = [
  {
    main: true,
    name: 'Multi-Post Stories',
    languages: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto atque possimus, repellendus recusandae dicta obcaecati minima expedita vero quidem et dolore impedit.',
    img: './assest/Img-Placeholder.png',
  },
  {
    main: false,
    name: 'Profesional Art Printing Data',
    languages: ['HTML', 'Bootstrap', 'Ruby'],
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus recusandae illum velit amet consectetur omnis aperiam aut. Incidunt quaerat ',
    img: 'https://images.unsplash.com/photo-1639413665566-2f75adf7b7ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
  },
  {
    main: false,
    name: 'Weather App',
    languages: ['HTML', 'Bootstrap', 'Ruby'],
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus recusandae illum velit amet consectetur omnis aperiam aut. Incidunt quaerat ',
    img: 'https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    main: false,
    name: 'Project Showcase',
    languages: ['HTML', 'Bootstrap', 'Ruby'],
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus recusandae illum velit amet consectetur omnis aperiam aut. Incidunt quaerat consequatur magnam! Rerum sunt quos doloribus illo!',
    img: 'https://images.unsplash.com/photo-1639398948599-051840e7bdfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    main: false,
    name: 'Pomodoro',
    languages: ['HTML', 'Bootstrap', 'Ruby'],
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus recusandae illum velit amet consectetur omnis aperiam aut. Incidunt quaerat ',
    img: 'https://images.unsplash.com/photo-1639413665566-2f75adf7b7ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
  },
  {
    main: false,
    name: 'Calculator',
    languages: ['HTML', 'Bootstrap', 'Ruby'],
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus recusandae illum velit amet consectetur omnis aperiam aut. Incidunt quaerat ',
    img: 'https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    main: false,
    name: 'Landing Page',
    languages: ['HTML', 'Bootstrap', 'Ruby'],
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus recusandae illum velit amet consectetur omnis aperiam aut. Incidunt quaerat ',
    img: 'https://images.unsplash.com/photo-1639398948599-051840e7bdfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
];

/* mobile menu */

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

/* POP UP WINDOW */

(() => {
  modalData.forEach((project, index) => {
    let lang = '';
    if (project.main) {
      project.languages.forEach((element) => {
        lang += ` <li class="lang-list">${element}</li>`;
      });
      document.querySelector('#main-grid').innerHTML = `
        <div class="work-project-display">
          <img src="${project.img}" alt="${project.name}" />
        </div>
        <div class="work-project-description">
          <h2 class="work-project-header">${project.name}</h2>
          <p class="work-project-para">
            ${project.description} ${project.description} 
          </p>
          <ul class="lang-list-ul">${lang}</ul>
          <button type="button" data-index="${index}" class="project-btn btn display-modal project1">See Project</button>
        </div>
      `;
    } else {
      project.languages.forEach((item) => {
        lang += `<li class='lang-list grid-lang-list'>${item}</li>`;
      });
      document.querySelector('#secondary-grid').innerHTML += `
      <div class="grid-project-container grid-1" style="background-image: url('${project.img}')">
        <div class="grid-project1 grid-project">
          <h3 class="grid-project-header">${project.name}</h3>
          <p class="grid-project-description">
            ${project.description}
          </p>

          <ul class="lang-list-ul">
          ${lang}
          </ul>
        </div>
        <button type="button" data-index="${index}" class="grid-btn btn display-modal project2">See Project</button>
      </div>
      `;
    }
  });
})();

const openPopup = (index) => {
  let lang = '';
  modalData[index].languages.forEach((element) => {
    lang += ` <li class="lang-list">${element}</li>`;
  });
  document.querySelector('.modal-container').style.display = 'block';
  document.querySelector('#popuptitle').textContent = modalData[index].name;
  document.querySelector('#modallanguages').innerHTML = lang;
  document.querySelector('#modal-description').textContent =
    modalData[index].description;
  document
    .querySelector('#modal-img')
    .setAttribute('src', modalData[index].img);
};

const modalDisplayBtn = document.querySelectorAll('.display-modal');
modalDisplayBtn.forEach((element) => {
  element.addEventListener('click', () =>
    openPopup(element.getAttribute('data-index'))
  );
});

document.querySelector('.modal-close-btn').addEventListener('click', () => {
  document.querySelector('.modal-container').style.display = 'none';
});

/* FORM VALIDATIONS */

const submit = document.getElementById('submit');
const emailError = document.getElementById('error');

document.getElementById('submit').addEventListener('click', (event) => {
  const email = document.getElementById('email').value;
  const emailValidation = /[A-Z]/.test(email);

  if (emailValidation) {
    emailError.textContent =
      'To submit the form, please enter your email id in lowercase';
    event.preventDefault();
  }
});
