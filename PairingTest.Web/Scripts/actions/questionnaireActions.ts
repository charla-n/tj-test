import * as types from "./actionTypes";
import API from "../utils/api";
import * as constants from '../utils/constants';

// api request
// call /questions then dispatch the result
export function GetQuestionnaire(dispatch) {
    dispatch({ type: types.QUESTIONNAIRE_REQUEST_TOGGLE });
    return API.Get(dispatch, constants.QUESTION).then((value) => {
        dispatch({ type: types.QUESTIONNAIRE_REQUEST_SUCCESS, data: (<any>value).data });
    });
}

export function GetQuestionnaireAction() {
    return dispatch => {
        return GetQuestionnaire(dispatch);
    };
}

