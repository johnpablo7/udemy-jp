// Manipular elemetos HTML con JS
const heading = document.querySelector('.heading');
const links = document.querySelectorAll('.navegacion a');

heading.textContent = 'Un nuevo heading...';
// heading.id= 'Un nuevo ID'
// heading.removeAttribute('class')

const inputName = document.querySelector('#nombre');
inputName.value = 'Un nuevo valor...';
// console.log(inputName.classList);
// inputName.dataset.name = 'input';

// links[0].textContent = 'Nuevo Enlace';

// biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
links.forEach((link, i) => (link.textContent = 'Nuevo Enlace'));
