import { test } from "../../page-fixtures/experimental-options"
import { expect } from "@playwright/test"
import { API } from "../../utils/api-util"
import { Endpoint, HTTPMethod } from "../../enums/API-enums"
import { Utils } from "../../utils/utils"

test('Registering with valid credentials', async ({APIFixture})=> {
    
    const credentials = 
        {
            userName: await Utils.generateFakeUsername(),
            password: "ASDasd!@#123"
        };

    const response = await API.makeCall(HTTPMethod.POST, Endpoint.Register, credentials)

    console.log("Response Status:", response.status());
    console.log("Response Body:", await response.json());

    expect(response.status()).toBe(201)

})