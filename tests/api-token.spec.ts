import {test, expect} from '@playwright/test'

test('API Login and store token', async ({ request }) => {
const response = await request.post('https://reqres.in/api/login', {
    data: {
        "email": "eve.holt@reqres.in",
        "password": "cityslicka"
    }
});

expect(response.status()).toBe(200);

const responseBody = await response.json();

expect(responseBody).toHaveProperty('token');

const apiToken = responseBody.token;

console.log(`Token received: ${apiToken}`);

process.env.API_TOKEN = apiToken;

console.log('Token recieved from env temp var: ' + process.env.ACCESS_TOKEN)
});