const technologies = ['HTML', 'CSS', 'JS', 'React.js', 'Node.js', 'TS'];

// console.log(technologies[0]);
// console.log(technologies[1]);
// console.log(technologies[2]);
// console.log(technologies[3]);
// console.log(technologies[4]);

// for (let i = 0; i < 5; i++) {
//   console.log(technologies[i]);
// }

// For
// for (let i = 0; i < technologies.length; i++) {
//   console.log(technologies[i]);
// }

// Foreach No genera un arragle nuevo
// technologies.forEach((technologie, i) => {
//   console.log(technologie);
// });

// Map Genera un arreglo nuevo
// const arrayNew = technologies.map((technologie) => {
// console.log(technologie);
// return technologie;
// });

// For ...of
for (const technologie of technologies) {
  console.log(technologie);
}

// console.log(arrayNew);
