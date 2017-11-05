import * as React from 'react'
import { connect } from 'react-redux'
import { GetQuestionnaireAction } from '../actions/questionnaireActions'
import QuestionnaireModel from '../models/questionnaireModel'
import Question from '../components/question'

export interface QuestionnaireProps {
    Questionnaire: QuestionnaireModel,
    GetQuestionnaire: any,
}

export class Questionnaire extends React.Component<QuestionnaireProps, {}> {

    constructor() {
        super();
    }

    componentDidMount() {
        // query questionnaire
        this.props.GetQuestionnaire();
    }

    // this method creates a <Question> component for each question text
    buildQuestions() {
        let questions = [];

        if (this.props.Questionnaire.Questions) {
            questions = this.props.Questionnaire.Questions.map((value: string, idx: number) => {
                return <Question Title={`${idx + 1}. ${value}`} key={idx}></Question>;
            });
        }

        return questions;
    }

    render() {

        const questions = this.buildQuestions();

        return (
            <div className={'align-center'}>
                <h1>{this.props.Questionnaire.Title}</h1>
                {questions}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        Questionnaire: state.questionnaire,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        GetQuestionnaire: () => dispatch(GetQuestionnaireAction()),
    }
}

let questionnaire = connect(mapStateToProps, mapDispatchToProps)(Questionnaire);

export default questionnaire;
