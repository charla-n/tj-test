import * as types from "../actions/actionTypes";
import QuestionnaireModel from '../models/questionnaireModel';

// default state
const questionnaireInitialState = {
    Loading: false,
    Title: null,
    Questions: [],
} as QuestionnaireModel;

export function questionnaireReducer(state = questionnaireInitialState, action) : QuestionnaireModel {
    switch (action.type) {
        case types.QUESTIONNAIRE_REQUEST_TOGGLE:
            return {
                ...state,
                Loading: !state.Loading,
            }
        case types.QUESTIONNAIRE_REQUEST_SUCCESS:
            return {
                ...state,
                ...action.data,
                Loading: false,
            }
        default:
            return state;
    }
}