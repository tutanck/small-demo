import { smallapi } from 'smallapi-js';

const api = await smallapi(process.env.API_URL, {
  apiKey: process.env.API_KEY,
});

console.log({ api });

const createdUser = await api.createUser({
  firstName: 'John',
  lastName: 'Doe',
  email: 'John.Doe@email.com',
  age: 33,
});

console.log({ createdUser });

const users = await api.findUserByQuery();

console.log({ users });
