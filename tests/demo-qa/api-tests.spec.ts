import { getRequest, test } from "../../page-fixtures/experimental-options"
import { expect } from "@playwright/test"
import { faker } from "@faker-js/faker"
import { API } from "../../utils/api-util"
import { HTTPMethod } from "../../enums/enums"

test('Registering with valid credentials', async ({APIFixture})=> {

    const url = `${process.env.DEMOQA_URL}/Account/v1/User`;
    const credentials = 
        {
            userName: faker.internet.userName(),
            password: "ASDasd!@#123"
        };
    
    const response = await API.makeCall(HTTPMethod.GET, url, credentials)
    expect(response.status()).toBe(200)
})