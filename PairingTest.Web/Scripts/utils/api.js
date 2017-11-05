"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var constants = require("./constants");
var types = require("../actions/actionTypes");
// uses axios to perform http requests
var API = (function () {
    function API() {
    }
    API.Get = function (dispatch, action, data) {
        return axios_1.default.get("" + constants.API_URL + action, {
            params: data,
        }).catch(function (value) {
            dispatch({ type: types.REQUEST_FAILURE, data: value.data });
        });
    };
    return API;
}());
exports.default = API;
//# sourceMappingURL=api.js.map