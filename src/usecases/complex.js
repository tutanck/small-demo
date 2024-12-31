import { smallapi } from 'smallapi-js';
import { uniqueNamesGenerator, names } from 'unique-names-generator';
import { getRandomInt } from '../utils/util.js';

// Connect to api using url and api key
const api = await smallapi(process.env.API_URL, {
  apiKey: process.env.API_KEY,
});

console.log('api:', api, '\n');

// Preliminary: Empty the users collection
await api.removeUserByQuery();
console.log('All existing users got removed from the collection...\n');

// Count the initial number of users in the database
let usersCount = await api.countUserDocuments();

console.log('usersCount:', usersCount, '\n');

// Display the initial state of the users collection
const initialUsers = await api.findUserByQuery();

console.log('initialUsers:', initialUsers, '\n');

const config = {
  dictionaries: [names],
};

while (usersCount < 7) {
  await api.updateUserByQuery({ age: { $lte: 0 } }, { $inc: { age: 1 } });

  console.log('\nAll existing users grew by one year.\n');

  const firstName = uniqueNamesGenerator(config);
  const lastName = uniqueNamesGenerator(config);
  const age = getRandomInt(0, 99); // random age between 0 and 99

  console.log('User to create:', { firstName, lastName, age });

  const createdUser = await api.createUser({
    firstName,
    lastName,
    email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@email.com`,
    age,
  });

  console.log('createdUser:', createdUser, '\n');

  // List all users existing in the users collection
  const users = await api.findUserByQuery();

  console.log('users:', users, '\n');

  // Count all users in the collection
  usersCount = await api.countUserDocuments();

  console.log('usersCount:', usersCount, '\n');

  // Delete all users whose age is greater than 99 years old
  await api.removeUserByQuery({ age: { $gte: 99 } });

  console.log('\nAll users over 99 years old have been deleted.\n');

  // List all remaining users in the collection
  const remainingUsers = await api.findUserByQuery();

  console.log('remainingUsers:', remainingUsers, '\n');

  // Count all remaining users in the collection
  const remainingUsersCount = await api.countUserDocuments();

  console.log('remainingUsersCount:', remainingUsersCount, '\n');
}
