// Lambda response utils

function createLambdaResponse(statusCode, payload) {
    return {
        statusCode,
        body: JSON.stringify(payload),
    };
}

function responseSuccess(result) {
    const payload = {
        success: true,
        result,
    };
    return createLambdaResponse(200, payload);
}

function responseError(error) {
    const payload = {
        success: false,
        error: error && error.message,
    };
    return createLambdaResponse(500, payload);
}

module.exports = { responseSuccess, responseError };
