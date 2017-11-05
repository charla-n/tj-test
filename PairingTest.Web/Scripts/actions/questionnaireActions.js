"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types = require("./actionTypes");
var api_1 = require("../utils/api");
var constants = require("../utils/constants");
// api request
// call /questions then dispatch the result
function GetQuestionnaire(dispatch) {
    dispatch({ type: types.QUESTIONNAIRE_REQUEST_TOGGLE });
    return api_1.default.Get(dispatch, constants.QUESTION).then(function (value) {
        dispatch({ type: types.QUESTIONNAIRE_REQUEST_SUCCESS, data: value.data });
    });
}
exports.GetQuestionnaire = GetQuestionnaire;
function GetQuestionnaireAction() {
    return function (dispatch) {
        return GetQuestionnaire(dispatch);
    };
}
exports.GetQuestionnaireAction = GetQuestionnaireAction;
//# sourceMappingURL=questionnaireActions.js.map