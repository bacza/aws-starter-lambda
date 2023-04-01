// Hello handler

const { getRequestData } = require('../utils/requestUtils');
const { responseSuccess, responseError } = require('../utils/responseUtils');

async function handler(event) {
    try {
        const request = getRequestData(event);
        const result = {
            hello: 'World!',
            request,
        };
        return responseSuccess(result);
    } catch (error) {
        return responseError(error);
    }
}

module.exports = { handler };
