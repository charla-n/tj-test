import FakeAPI from './fakeAPI'
import * as constants from '../../utils/constants'

export default class FakeQuestionnaire extends FakeAPI {

    static MOCK_QUESTION_DATA = {
        Title: "Geography Questions",
        Questions: ["What is the capital of Cuba?", "What is the capital of France?", "What is the capital of Germany?", "What is the capital of Poland?"],
    };

    constructor() {
        super();
    }

    // return some fake data when /questions is called
    mockGetQuestion() {
        this.mockGet(constants.QUESTION, FakeQuestionnaire.MOCK_QUESTION_DATA);
    }

    mockGetQuestionFailure() {
        this.mockFailure(constants.QUESTION);
    }
}