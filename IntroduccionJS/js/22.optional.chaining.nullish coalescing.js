// Optional chaining (?)
const student = {
  name: 'John',
  class: 'Programación 1',
  approved: true,
  exams: {
    exam1: 90,
  },
};

console.log(student.exams?.exam1);

console.log('Después de Alumno');

// Nullish coalescing (??)
// const page = null ?? 1;
const page = 10 ?? 1;
console.log(page);
