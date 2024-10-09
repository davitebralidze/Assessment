export enum HTTPMethod {
    GET,
    POST,
    PUT,
    DELETE
}

export const Endpoint = {
    Register: `${process.env.DEMOQA_URL}/Account/v1/User`
} as const;

