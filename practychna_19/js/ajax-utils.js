(function (global) {
    const ajaxUtils = {};

    function getRequestObject() {
        if (global.XMLHttpRequest) {
            return new XMLHttpRequest();
        } else {
            global.alert("Ajax is not supported!");
            return null;
        }
    }

    ajaxUtils.sendGetRequest = function (requestUrl, responseHandler, isJsonResponse) {
        const request = getRequestObject();
        request.onreadystatechange = function () {
            handleResponse(request, responseHandler, isJsonResponse);
        };
        request.open("GET", requestUrl, true);
        request.send(null);
    };

    ajaxUtils.sendPostRequest = function (
        requestUrl,
        requestBody,
        responseHandler,
        isJsonResponse
    ) {
        const request = getRequestObject();
        request.onreadystatechange = function () {
            handleResponse(request, responseHandler, isJsonResponse);
        };
        request.open("POST", requestUrl, true);
        request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        request.send(requestBody);
    };

    function handleResponse(request, responseHandler, isJsonResponse) {
        if (request.readyState === 4 && request.status === 200) {
            if (isJsonResponse === undefined) {
                isJsonResponse = true;
            }
            if (isJsonResponse) {
                responseHandler(JSON.parse(request.responseText));
            } else {
                responseHandler(request.responseText);
            }
        }
    }

    global.ajaxUtils = ajaxUtils;
})(window);
