import { smallapi } from 'smallapi-js';
import { uniqueNamesGenerator, names } from 'unique-names-generator';
import { getRandomInt, isEven } from '../utils/util.js';

// Connect to api using url and api key
const api = await smallapi(process.env.API_URL, {
  apiKey: process.env.API_KEY,
});

console.log('api:', api, '\n');

// Preliminaries: Empty the users collection
await api.removeUserByQuery();
console.log('All existing users got removed from the collection...\n');

const nbUsersToCreate = 4;

console.log('nbUsersToCreate:', nbUsersToCreate, '\n');

const config = {
  dictionaries: [names],
};

for (let step = 0; step < nbUsersToCreate; step++) {
  const firstName = isEven(step) ? 'Linda' : 'John';
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

// Delete all users with the first name John
const deleteStatus = await api.removeUserByQuery({ firstName: 'John' });

console.log('deleteStatus:', deleteStatus, '\n');

// List all remaining users in the collection
const remainingUsers = await api.findUserByQuery();

console.log('remainingUsers:', remainingUsers, '\n');
