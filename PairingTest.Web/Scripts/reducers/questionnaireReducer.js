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
var types = require("../actions/actionTypes");
// default state
var questionnaireInitialState = {
    Loading: false,
    Title: null,
    Questions: [],
};
function questionnaireReducer(state, action) {
    if (state === void 0) { state = questionnaireInitialState; }
    switch (action.type) {
        case types.QUESTIONNAIRE_REQUEST_TOGGLE:
            return __assign({}, state, { Loading: !state.Loading });
        case types.QUESTIONNAIRE_REQUEST_SUCCESS:
            return __assign({}, state, action.data, { Loading: false });
        default:
            return state;
    }
}
exports.questionnaireReducer = questionnaireReducer;
//# sourceMappingURL=questionnaireReducer.js.map