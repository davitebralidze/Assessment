import { APIResponse } from "@playwright/test";
import { getRequest } from "../page-fixtures/experimental-options";
import { HTTPMethod } from "../enums/enums";
import { Serializable } from "child_process";

export class API {
    static async makeCall(httpMethod: HTTPMethod, URL: string, body?: object, key?: string): Promise<APIResponse> {
        let response: APIResponse;

        switch (httpMethod) {
            case HTTPMethod.GET:
                response = await getRequest().get(URL, {
                    data: body,
                    headers: {
                        "Authorization" : key ? `Bearer ${key}` : ''
                    }
                });
                break;

            case HTTPMethod.POST:
                response = await getRequest().post(URL, {
                    data: body,
                    headers: {
                        "Authorization" : key ? `Bearer ${key}` : ''
                    }
                });
                break;
            
            case HTTPMethod.PUT:
                response = await getRequest().put(URL, {
                    data: body,
                    headers: {
                        "Authorization" : key ? `Bearer ${key}` : ''
                    }
                });
                break;

            case HTTPMethod.DELETE:
                response = await getRequest().delete(URL, {
                    data: body,
                    headers: {
                        "Authorization" : key ? `Bearer ${key}` : ''
                    }
                });
                break;

            default:
                throw new Error(`Incorrect API call: ${HTTPMethod}`);
        }
        return response;
    }

    static async responseToJSON(response: APIResponse): Promise<Serializable> {
        return await response.json();
    }
}
