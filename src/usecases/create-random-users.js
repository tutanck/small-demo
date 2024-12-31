import { smallapi } from 'smallapi-js';
import { uniqueNamesGenerator, names } from 'unique-names-generator';
import { getRandomInt } from '../utils/util.js';

// Connect to api using url and api key
const api = await smallapi(process.env.API_URL, {
  apiKey: process.env.API_KEY,
});

console.log('api:', api, '\n');

// Empty the users collection
await api.removeUserByQuery();
console.log('All existing users got removed from the collection...\n');

const nbUsersToCreate = getRandomInt(1, 9); // random number of users between 1 and 9

console.log('nbUsersToCreate:', nbUsersToCreate, '\n');

const config = {
  dictionaries: [names],
};

for (let step = 0; step < nbUsersToCreate; step++) {
  const firstName = uniqueNamesGenerator(config);
  const lastName = uniqueNamesGenerator(config);
  const age = getRandomInt(0, 99); // random age between 0 and 99

  console.log('User to create:', { firstName, lastName, age });

  const createdUser = await api.createUser({
    firstName,
    lastName,
    email: `${firstName}.${lastName}@email.com`,
    age,
  });

  console.log('createdUser:', createdUser, '\n');
}

// List all users existing in the users collection
const users = await api.findUserByQuery();

console.log('users:', users, '\n');

// Count the number of users actually created
const usersCount = await api.countUserDocuments();

console.log('usersCount:', usersCount, '\n');
