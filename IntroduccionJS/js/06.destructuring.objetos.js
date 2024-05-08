// Objetos - Destructuring de dos o más objetos
const product = {
  name: 'Tablet',
  price: 300,
  available: false,
};

const client = {
  name: 'Juan',
  premium: true,
  address: {
    street: 'Calle principal',
  },
};

const { name } = product;
const {
  name: clientName,
  address: { street },
} = client;

console.log(name);
console.log(clientName);
console.log(street);
