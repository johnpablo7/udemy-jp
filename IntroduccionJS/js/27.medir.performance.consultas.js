// Performance y Multiple Async Await
const url = 'https://jsonplaceholder.typicode.com/comments';
const url2 = 'https://jsonplaceholder.typicode.com/todos';

const consultAPI = async () => {
  try {
    const start = performance.now();

    const response = await fetch(url);
    // if (!response.ok) {
    //   throw new Error('Hubo un error...');
    // }
    const data = await response.json();
    console.log(data);

    const response2 = await fetch(url2);
    const data2 = await response2.json();
    console.log(data2);

    const end = performance.now();
    console.log(`El resultado de la PRIMERA función es: ${end - start} ms`);
  } catch (error) {
    console.log(error.message);
  }
};

const consultAPI2 = async () => {
  try {
    const start = performance.now();

    const [response, response2] = await Promise.all([fetch(url), fetch(url2)]);
    const [data, data2] = await Promise.all([
      response.json(),
      response2.json(),
    ]);

    console.log(data);
    console.log(data2);

    const end = performance.now();
    console.log(`El resultado de la SEGUNDA función es: ${end - start} ms`);
  } catch (error) {
    console.log(error.message);
  }
};

consultAPI();
consultAPI2();
