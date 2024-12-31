import { smallapi } from 'smallapi-js';

// Connect to api using url and api key
const api = await smallapi(process.env.API_URL, {
  apiKey: process.env.API_KEY,
});

console.log('api:', api, '\n');

// Preliminary: Empty the users collection
await api.removeUserByQuery();
console.log('All existing users got removed from the collection...\n');

try {
  // Trigger an error when looking for a user that does not exist (no id provided)
  const user = await api.findUserById();

  console.log('user:', user, '\n');
} catch (error) {
  console.log('errorMessage:', error.message);
  console.log('errorStatus:', error.response?.status);
  console.log('errorCause:', error.response?.data);
}
