// Ternarios
const auth = true;

const balance = 1000;
const pay = 1200;
const card = true;

// if (auth) {
//   console.log('Usuario autenticado');
// } else {
//   console.log('No autenticado, ir a Login');
// }

// auth
//   ? console.log('Usuario autenticado')
//   : console.log('No autenticado, ir a Login');

balance > pay || card
  ? console.log('Si puedes pagar')
  : console.log('No, no puedes pagar');
