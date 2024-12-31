import { smallapi } from 'smallapi-js';

// Connect to api using url and api key
const api = await smallapi(process.env.API_URL, {
  apiKey: process.env.API_KEY,
});

console.log('api:', api, '\n');

// Empty the users collection
await api.removeUserByQuery();
console.log('All existing users got removed from the collection...\n');

// Create user John Doe aged 33
const createdUser = await api.createUser({
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@email.com',
  age: 33,
});

console.log('createdUser:', createdUser, '\n');

// List all users existing in the users collection
const users = await api.findUserByQuery();

console.log('users:', users, '\n');
