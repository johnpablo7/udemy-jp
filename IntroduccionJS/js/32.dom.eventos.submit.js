// Eventos del DOM - Submit

const form = document.querySelector('#formulario');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.querySelector('#nombre').value;
  const password = document.querySelector('#password').value;
  // console.log(name);
  // console.log(password);

  // Prevenir nuevas alertas
  const advanceWarning = document.querySelector('.alerta');
  advanceWarning?.remove();

  const alert = document.createElement('DIV');
  alert.classList.add(
    'alerta',
    'text-white',
    'uppercase',
    'text-sm',
    'text-center',
    'p-2',
    'font-black'
  );

  if (name === '' || password === '') {
    alert.textContent = 'Todos los campos son obligatorios';
    alert.classList.add('bg-red-500');
  } else {
    alert.textContent = 'Todo bien, iniciando sesión...';
    alert.classList.add('bg-green-500');
  }

  form.appendChild(alert);

  setTimeout(() => {
    alert.remove();
  }, 2000);

  // console.log(alert);
});
