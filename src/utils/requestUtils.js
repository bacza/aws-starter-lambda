// Request utils

function decodeBase64(data) {
    return Buffer.from(data, 'base64');
}

function parseJson(data) {
    try {
        return JSON.parse(data);
    } catch (_) {
        return null;
    }
}

function getRequestData(event) {
    const {
        httpMethod,
        headers,
        queryStringParameters: queryParams,
        pathParameters: pathParams,
        body,
        isBase64Encoded,
    } = event || {};

    const data = isBase64Encoded ? decodeBase64(body) : body;
    const json = parseJson(data);

    return { httpMethod, headers, queryParams, pathParams, data, json };
}

module.exports = { getRequestData };
