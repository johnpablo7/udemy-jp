// Objetos - Destructuring de dos o más objetos
const product = {
  name: 'Tablet',
  price: 300,
  available: false,
};

const client = {
  name: 'Juan',
  premium: true,
};

// const trolley = {
//   amount: 1,
//   ...product, // spread operator
// };

// console.log(trolley);
// console.log(trolley.name);

// const newObject = {
//   product,
//   client,
// };

const newObject = {
  ...product,
  ...client,
};

console.log(newObject);

const newObject2 = Object.assign(product, client);
console.log(newObject2);
