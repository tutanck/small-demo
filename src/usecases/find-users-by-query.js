import { smallapi } from 'smallapi-js';
import { uniqueNamesGenerator, names } from 'unique-names-generator';

// Connect to api using url and api key
const api = await smallapi(process.env.API_URL, {
  apiKey: process.env.API_KEY,
});

console.log('api:', api, '\n');

// Preliminary: Empty the users collection
await api.removeUserByQuery();
console.log('All existing users got removed from the collection...\n');

const nbUsersToCreate = 5;

console.log('nbUsersToCreate:', nbUsersToCreate, '\n');

const config = {
  dictionaries: [names],
};

const minAge = 16;

for (let count = 0; count < nbUsersToCreate; count++) {
  const firstName = uniqueNamesGenerator(config);
  const lastName = uniqueNamesGenerator(config);

  console.log('User to create:', { firstName, lastName, age: count });

  const createdUser = await api.createUser({
    firstName,
    lastName,
    email: `${firstName}.${lastName}@email.com`,
    age: minAge + count,
  });

  console.log('createdUser:', createdUser, '\n');
}

// List all users existing in the users collection
const users = await api.findUserByQuery();

console.log('users:', users, '\n');

// Find all users who are teenagers (age < 18)
const teenagers = await api.findUserByQuery({ age: { $lt: 18 } });

console.log('teenagers:', teenagers, '\n');
