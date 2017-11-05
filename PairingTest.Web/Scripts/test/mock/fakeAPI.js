"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MockAdapter = require('axios-mock-adapter');
var nock = require('nock');
var axios_1 = require("axios");
var constants_1 = require("../../utils/constants");
var FakeAPI = (function () {
    function FakeAPI() {
        // fake axios
        this.apiMock = new MockAdapter(axios_1.default);
        this.latency = 200;
    }
    FakeAPI.prototype.reset = function () {
        this.apiMock.reset();
    };
    // simulate a get
    FakeAPI.prototype.mockGet = function (action, data) {
        this.apiMock.onGet("" + constants_1.API_URL + action).reply(this.latency, data);
    };
    // simulate a failure
    FakeAPI.prototype.mockFailure = function (action) {
        this.apiMock.onGet("" + constants_1.API_URL + action).networkError();
    };
    return FakeAPI;
}());
exports.default = FakeAPI;
//# sourceMappingURL=fakeAPI.js.map