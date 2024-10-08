import { test, expect } from "@playwright/test"
import { faker } from "@faker-js/faker"


test('ENV TESTING', async ({page}) => {
    console.log(process.env.USERNAME)
    process.env.USERNAME = "OVERRIDEN"
    console.log(process.env.USERNAME)
})

test('Gemerate Token', async ({request})=> {
    const response = await request.post(`${process.env.DEMOQA_URL}/Account/v1/GenerateToken`, {
        data: {
            userName: "testuser123123123123",
            password: "AAAAaaaa1111!!!!"
        }
    })
    expect(response.status()).toBe(200)

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty('token');
    process.env.API_KEY = responseBody.token;
})

test('Login with API', async ({request})=> {
    const response = await request.post(`${process.env.DEMOQA_URL}/Account/v1/Login`, {
        data: {
            userName: "testuser123123123123",
            password: "AAAAaaaa1111!!!!"
        }
    })
    expect(response.status()).toBe(200)
})