// Objetos - Manipulación
const product = {
  name: 'Tablet',
  price: 300,
  available: false,
};

// Object.freeze(product); // No deja modificar propiedades el objeto y devuelve lo mismo
// Object.seal(product); // Modifica las propiedades existentes, pero no añade ni elimina ninguna propiedad

// Reescribir un valor
product.available = true;

// Si no existe, lo va a añadir
product.image = 'imagen.png';

// Eliminar propiedad
// biome-ignore lint/performance/noDelete: <explanation>
delete product.price;

console.log(product);
