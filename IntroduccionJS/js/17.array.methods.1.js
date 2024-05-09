const technologies = ['HTML', 'CSS', 'JS', 'React.js', 'Node.js'];
const numbers = [10, 20, 30];

// Filter
// const newArray = technologies.filter((tech) => tech !== 'HTML');
// const result = numbers.filter((number) => number > 15);

// Includes
// const result = technologies.includes('CSS'); // true

// Some - Devuelve si al menos uno cumple la condición
// const result = numbers.some((number) => number > 15); // true

// Find - Devuelve el primer elemento que cumple una condición
// const result = numbers.find((number) => number > 15);

// Every - Retorna true o false si todos cumplen la condición
// const result = numbers.every((number) => number > 5);

// Reduce - Retorna un acumulado del total
const result = numbers.reduce((total, number) => total + number, 0);

// console.log(newArray);
console.log(result);
