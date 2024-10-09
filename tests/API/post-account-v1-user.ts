import { getRequest } from "../../page-fixtures/experimental-options"

const endpoint = "/Account/v1/User"

export async function makeCall(body: requestBody) {
    return await getRequest().post(`${process.env.DEMOQA_URL}${endpoint}`, {
        data: body
    })
}

export type requestBody = {
    userName: string,
    password: string
}

export type successResponseBody = {
    "userId": string,
    "username": string,
    "books": [
        {
            "isbn": string,
            "title": string,
            "subTitle": string,
            "author": string,
            "publish_date": string,
            "publisher": string,
            "pages": number,
            "description": string,
            "website": string
        }
    ]
}