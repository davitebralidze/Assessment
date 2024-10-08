import { test, expect } from "@playwright/test"
import { faker } from "@faker-js/faker"

test('Registering with valid credentials', async ({request})=> {
    const response = await request.post(`${process.env.DEMOQA_URL}/Account/v1/User`, {
        data: {
            userName: faker.internet.userName(),
            password: "ASDasd!@#123"
        }
    })
    expect(response.status()).toBe(201)
})

test('Registering with invalid credentials', async ({request})=> {
    const response = await request.post(`${process.env.DEMOQA_URL}/Account/v1/User`, {
        data: {
            userName: faker.string.alphanumeric(500),
            password: "ASDasd!@#123"
        }
    })
    console.log(faker.string.alphanumeric(1000))
    expect(response.status()).toBe(502)
})