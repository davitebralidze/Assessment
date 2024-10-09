import { test } from "../../page-fixtures/experimental-options"
import { expect } from "@playwright/test"
import { faker } from "@faker-js/faker"
import { API } from "../../utils/api-util"
import { Endpoint, HTTPMethod } from "../../enums/API-enums"

test('Registering with valid credentials', async ({APIFixture})=> {

    const url = Endpoint.Register;
    const credentials = 
        {
            userName: faker.internet.userName(),
            password: "ASDasd!@#123"
        };
    
    const response = await API.makeCall(HTTPMethod.GET, url, credentials)
    expect(response.status()).toBe(200)

})