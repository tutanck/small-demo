import { smallapi } from 'smallapi-js';
import { uniqueNamesGenerator, names } from 'unique-names-generator';

// Connect to api using url and api key
const api = await smallapi(process.env.API_URL, {
  apiKey: process.env.API_KEY,
});

console.log('api:', api, '\n');

// Preliminaries: Empty the users collection
await api.removeUserByQuery();
console.log('All existing users got removed from the collection...\n');

const usersCount = await api.countUserDocuments();

console.log('usersCount:', usersCount, '\n');

if (usersCount > 0) {
  const users = await api.findUserByQuery();

  console.log('users:', users, '\n');
}

const config = {
  dictionaries: [names],
};

if (usersCount < 3) {
  const firstName = uniqueNamesGenerator(config);
  const lastName = uniqueNamesGenerator(config);

  console.log('firstName:', firstName, lastName, '\n');

  const createdUser = await api.createUser({
    firstName,
    lastName,
    email: `${firstName}.${lastName}@email.com`,
    age: 0,
  });

  console.log('createdUser:', createdUser, '\n');

  const users = await api.findUserByQuery();

  console.log('users:', users, '\n');

  const usersCount = await api.countUserDocuments();

  console.log('usersCount:', usersCount, '\n');
}

await api.updateUserByQuery({ age: { $lt: 7 } }, { $inc: { age: 1 } });
console.log('\nAll existing users got older with 1 year...\n');

const users = await api.findUserByQuery();

console.log('users:', users, '\n');

await api.removeUserByQuery({ age: { $gte: 7 } });
console.log('\nAll users over 6 got removed...\n');

const remainingUsers = await api.findUserByQuery();

console.log('remainingUsers:', remainingUsers, '\n');

const remainingUsersCount = await api.countUserDocuments();

console.log('remainingUsersCount:', remainingUsersCount, '\n');
