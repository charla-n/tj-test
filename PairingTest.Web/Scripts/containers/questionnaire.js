"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_redux_1 = require("react-redux");
var questionnaireActions_1 = require("../actions/questionnaireActions");
var question_1 = require("../components/question");
var Questionnaire = (function (_super) {
    __extends(Questionnaire, _super);
    function Questionnaire() {
        return _super.call(this) || this;
    }
    Questionnaire.prototype.componentDidMount = function () {
        // query questionnaire
        this.props.GetQuestionnaire();
    };
    // this method creates a <Question> component for each question text
    Questionnaire.prototype.buildQuestions = function () {
        var questions = [];
        if (this.props.Questionnaire.Questions) {
            questions = this.props.Questionnaire.Questions.map(function (value, idx) {
                return React.createElement(question_1.default, { Title: idx + 1 + ". " + value, key: idx });
            });
        }
        return questions;
    };
    Questionnaire.prototype.render = function () {
        var questions = this.buildQuestions();
        return (React.createElement("div", { className: 'align-center' },
            React.createElement("h1", null, this.props.Questionnaire.Title),
            questions));
    };
    return Questionnaire;
}(React.Component));
exports.Questionnaire = Questionnaire;
var mapStateToProps = function (state, ownProps) {
    return {
        Questionnaire: state.questionnaire,
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        GetQuestionnaire: function () { return dispatch(questionnaireActions_1.GetQuestionnaireAction()); },
    };
};
var questionnaire = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Questionnaire);
exports.default = questionnaire;
//# sourceMappingURL=questionnaire.js.map