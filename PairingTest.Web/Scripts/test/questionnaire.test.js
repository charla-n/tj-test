"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var redux_mock_store_1 = require("redux-mock-store");
var redux_thunk_1 = require("redux-thunk");
var types = require("../actions/actionTypes");
var questionnaireActions = require("../actions/questionnaireActions");
var questionnaireReducer_1 = require("../reducers/questionnaireReducer");
var fakeQuestionnaire_1 = require("./mock/fakeQuestionnaire");
var middlewares = [redux_thunk_1.default];
var mockStore = redux_mock_store_1.default(middlewares);
var fakeQuestion = new fakeQuestionnaire_1.default();
describe('questionnaire actions', function () {
    it('call GetQuestionnaire should success with data', function () {
        var store = mockStore();
        // fake data
        fakeQuestion.reset();
        fakeQuestion.mockGetQuestion();
        // when getting the questionnaire we first set the flag loading then we process the data
        var expectedActions = [
            { type: types.QUESTIONNAIRE_REQUEST_TOGGLE },
            {
                type: types.QUESTIONNAIRE_REQUEST_SUCCESS, data: __assign({}, fakeQuestionnaire_1.default.MOCK_QUESTION_DATA)
            }
        ];
        return questionnaireActions.GetQuestionnaire(store.dispatch).then(function () {
            expect(store.getActions()).toEqual(expectedActions);
        }).catch(function (ret) {
            fail(ret);
        });
    });
    it('call GetQuestionnaire should fail', function () {
        var store = mockStore();
        // fake data
        fakeQuestion.reset();
        fakeQuestion.mockGetQuestionFailure();
        var expectedActions = [
            { type: types.QUESTIONNAIRE_REQUEST_TOGGLE },
            {
                type: types.REQUEST_FAILURE
            }
        ];
        // we except the call to fail
        return questionnaireActions.GetQuestionnaire(store.dispatch).then(function () {
            fail();
        }).catch(function (ret) {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});
describe('questionnaire reducer', function () {
    it('should return the initial state', function () {
        expect(questionnaireReducer_1.questionnaireReducer(undefined, {})).toEqual({
            Loading: false,
            Title: null,
            Questions: [],
        });
    });
    it('should load', function () {
        expect(questionnaireReducer_1.questionnaireReducer(undefined, { type: types.QUESTIONNAIRE_REQUEST_TOGGLE })).toEqual({
            Loading: true,
            Title: null,
            Questions: [],
        });
    });
    it('should map data', function () {
        expect(questionnaireReducer_1.questionnaireReducer(undefined, { type: types.QUESTIONNAIRE_REQUEST_SUCCESS, data: fakeQuestionnaire_1.default.MOCK_QUESTION_DATA }))
            .toEqual(__assign({ Loading: false }, fakeQuestionnaire_1.default.MOCK_QUESTION_DATA));
    });
});
//# sourceMappingURL=questionnaire.test.js.map