import smallapi from 'smallapi-js';

const api = await smallapi(
  //   'https://desolate-thicket-04809-1d851952fc60.herokuapp.com/',
  'http://localhost:7679/',
  {
    // apiKey: 'my-secret-key',
    debug: true,
  },
);

console.log({ api });

const user = await api.createUser({
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@mail.com',
  age: 32,
});

console.log({ user });
