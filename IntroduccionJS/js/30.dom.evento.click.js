// Eventos del DOM - Clicks
const heading = document.querySelector('.heading');
const links = document.querySelectorAll('.navegacion a');

// heading.addEventListener('click', () => {
//   heading.textContent = 'Nuevo heading al dar click...';
// });

// heading.addEventListener('mouseleave', () => {
//   heading.textContent = 'Saliendo...';
// });

links.forEach((link, i) => {
  link.addEventListener('click', (e) => {
    // console.log(e);
    // console.log(e.target);
    e.preventDefault();
    e.target.textContent = 'Diste click...';
    // console.log('diste click en un enlace...');
  });
});
