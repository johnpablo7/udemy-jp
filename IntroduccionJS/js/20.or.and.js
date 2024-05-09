const balance = 1000;
const pay = 1200;
const card = false;

// Logical Or y Logical And
// || - Al menos una se cumple
// && - Revisa que todas se cumplan

if (balance > pay || card) {
  console.log('Puedes pagar');
} else {
  console.log('No, no puedes pagar');
}
