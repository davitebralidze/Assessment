import { test } from "../../page-fixtures/experimental-options"
import { expect } from "@playwright/test"
import { Utils } from "../../utils/utils"
import  * as registerUser from "../../API/post-account-v1-user" 

test('Registering with valid credentials', async ({})=> {
    
    const credentials: registerUser.requestBody = 
        {
            userName: await Utils.generateFakeUsername(),
            password: "ASDasd!@#123"
        };

    const response = await registerUser.makeCall(credentials);

    expect(response.status(), {message: `Status was unsuccessful. Response text: ${await response.text()}`}).toBe(201)

})