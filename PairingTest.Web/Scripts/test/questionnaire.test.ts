import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as types from "../actions/actionTypes";
import * as questionnaireActions from '../actions/questionnaireActions'
import { questionnaireReducer } from '../reducers/questionnaireReducer'
import FakeQuestionnaire from './mock/fakeQuestionnaire'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const fakeQuestion = new FakeQuestionnaire();

describe('questionnaire actions', () => {
    it('call GetQuestionnaire should success with data', () => {
        const store = mockStore();

        // fake data
        fakeQuestion.reset();
        fakeQuestion.mockGetQuestion();

        // when getting the questionnaire we first set the flag loading then we process the data
        const expectedActions = [
            { type: types.QUESTIONNAIRE_REQUEST_TOGGLE },
            {
                type: types.QUESTIONNAIRE_REQUEST_SUCCESS, data: {
                    ...FakeQuestionnaire.MOCK_QUESTION_DATA
                }
            }
        ]

        return questionnaireActions.GetQuestionnaire(store.dispatch).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        }).catch((ret) => {
            fail(ret);
        });
    })

    it('call GetQuestionnaire should fail', () => {
        const store = mockStore();

        // fake data
        fakeQuestion.reset();
        fakeQuestion.mockGetQuestionFailure();

        const expectedActions = [
            { type: types.QUESTIONNAIRE_REQUEST_TOGGLE },
            {
                type: types.REQUEST_FAILURE
            }
        ]

        // we except the call to fail
        return questionnaireActions.GetQuestionnaire(store.dispatch).then(() => {
            fail();
        }).catch((ret) => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    })
})

describe('questionnaire reducer', () => {
    it('should return the initial state', () => {
        expect(questionnaireReducer(undefined, {})).toEqual(
            {
                Loading: false,
                Title: null,
                Questions: [],
            }
        )
    })

    it('should load', () => {
        expect(questionnaireReducer(undefined, { type: types.QUESTIONNAIRE_REQUEST_TOGGLE })).toEqual(
            {
                Loading: true,
                Title: null,
                Questions: [],
            }
        )
    })

    it('should map data', () => {
        expect(questionnaireReducer(undefined, { type: types.QUESTIONNAIRE_REQUEST_SUCCESS, data: FakeQuestionnaire.MOCK_QUESTION_DATA }))
            .toEqual(
            {
                Loading: false,
                ...FakeQuestionnaire.MOCK_QUESTION_DATA,
            }
        )
    })
})