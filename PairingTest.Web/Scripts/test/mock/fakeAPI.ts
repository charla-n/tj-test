var MockAdapter = require('axios-mock-adapter');
var nock = require('nock');
import axios from 'axios';
import { API_URL } from '../../utils/constants'

export default class FakeAPI {
    apiMock: any;
    latency: number;

    constructor() {
        // fake axios
        this.apiMock = new MockAdapter(axios);
        this.latency = 200;
    }

    public reset() {
        this.apiMock.reset();
    }

    // simulate a get
    protected mockGet(action, data) {
        this.apiMock.onGet(`${API_URL}${action}`).reply(this.latency, data);
    }

    // simulate a failure
    protected mockFailure(action) {
        this.apiMock.onGet(`${API_URL}${action}`).networkError();
    }
}