import { smallapi } from 'smallapi-js';
import { uniqueNamesGenerator, names } from 'unique-names-generator';
import { getRandomInt } from '../utils/util.js';

// Connect to api using url and api key
const api = await smallapi(process.env.API_URL, {
  apiKey: process.env.API_KEY,
});

console.log('api:', api, '\n');

// Preliminaries: Empty the users collection
await api.removeUserByQuery();
console.log('All existing users got removed from the collection...\n');

const nbUsersToCreate = 3;

console.log('nbUsersToCreate:', nbUsersToCreate, '\n');

const config = {
  dictionaries: [names],
};

let firstCreatedUserId;

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

  if (step === 0) {
    firstCreatedUserId = createdUser._id;
  }
}

// List all users existing in the users collection
const users = await api.findUserByQuery();

console.log('users:', users, '\n');

console.log('firstCreatedUserId:', firstCreatedUserId, '\n');

// Find the first user actually created
const firstCreatedUser = await api.findUserById(firstCreatedUserId);

console.log('firstCreatedUser:', firstCreatedUser, '\n');
