import { getRequest, test } from "../../page-fixtures/api-options"
import { expect } from "@playwright/test"
import { faker } from "@faker-js/faker"

test('Registering with valid credentials', async ({})=> {
    const response = await getRequest().post(`${process.env.DEMOQA_URL}/Account/v1/User`, {
        data: {
            userName: faker.internet.userName(),
            password: "ASDasd!@#123"
        }
    })
    expect(response.status()).toBe(201)
})

test('Registering with invalid credentials', async ({})=> {
    const response = await getRequest().post(`${process.env.DEMOQA_URL}/Account/v1/User`, {
        data: {
            userName: faker.string.alphanumeric(500),
            password: "ASDasd!@#123"
        }
    })
    expect(response.status()).toBe(502)
})