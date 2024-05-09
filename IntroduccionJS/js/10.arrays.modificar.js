const technologies = ['HTML', 'CSS', 'JS', 'React.js', 'Node.js'];
// technologies[5] = 'Nest.js';

// technologies.push('Nest.js'); // Mutates
// const newArray = [...technologies, 'Nest.js'];
// const newArray = ['Nest.js', ...technologies];

// technologies.shift(); // Mutates remove first element
// filter No Mutation
// const technologies2 = technologies.filter((tech) => {
// console.log(tech);
// if (tech === 'HTML') {
//   return tech;
// }
// if (tech !== 'HTML') {
//   return tech;
// }
// });

// technologies[4] = 'Nest.js';
// map No Mutation
const technologies2 = technologies.map((tech) => {
  // console.log(tech);
  if (tech === 'Node.js') {
    return 'Nest.js';
  }
  return tech;
});

// console.log(newArray);
// console.log(technologies);
console.log(technologies2);
