import { smallapi } from 'smallapi-js';
import {
  uniqueNamesGenerator,
  /* Config, */ names,
} from 'unique-names-generator';

const config /* : Config */ = {
  dictionaries: [names],
};

const api = await smallapi(
  'https://desolate-thicket-04809-1d851952fc60.herokuapp.com/',
  {
    apiKey: 'HDRTmMSq-GKARxduy-PcPywRnT-HANrf2Jn',
    debug: !true,
  },
);

console.log({ api });

const usersCount = await api.countUser();

console.log({ usersCount });

if (usersCount > 0) {
  const users = await api.findUserByQuery();

  console.log({ users });
}

if (usersCount < 3) {
  const firstName = uniqueNamesGenerator(config);
  const lastName = uniqueNamesGenerator(config);

  console.log({ firstName, lastName });

  const createdUser = await api.createUser({
    firstName,
    lastName,
    email: `${firstName}.${lastName}@email.com`,
    age: 0,
  });

  console.log({ createdUser });

  const users = await api.findUserByQuery();

  console.log({ users });

  const usersCount = await api.countUser();

  console.log({ usersCount });
}

await api.updateUserByQuery({ age: { $lt: 7 } }, { $inc: { age: 1 } });
console.log('\nAll existing users got older with 1 year...\n');

const users = await api.findUserByQuery();

console.log({ users });

await api.removeUserByQuery({ age: { $gte: 7 } });
console.log('\nAll users over 6 got removed...\n');

const remainingUsers = await api.findUserByQuery();

console.log({ remainingUsers });

const remainingUsersCount = await api.countUser();

console.log({ remainingUsersCount });
