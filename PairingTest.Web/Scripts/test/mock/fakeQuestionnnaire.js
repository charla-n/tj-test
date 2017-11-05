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
var fakeAPI_1 = require("./fakeAPI");
var constants = require("../../utils/constants");
var FakeQuestionnaire = /** @class */ (function (_super) {
    __extends(FakeQuestionnaire, _super);
    function FakeQuestionnaire() {
        return _super.call(this) || this;
    }
    // return some fake data when /questions is called
    FakeQuestionnaire.prototype.mockGetQuestion = function () {
        this.mockGet(constants.QUESTION, FakeQuestionnaire.MOCK_QUESTION_DATA);
    };
    FakeQuestionnaire.prototype.mockGetQuestionFailure = function () {
        this.mockFailure(constants.QUESTION);
    };
    FakeQuestionnaire.MOCK_QUESTION_DATA = {
        questionnaireTitle: "Geography Questions",
        questionText: ["What is the capital of Cuba?", "What is the capital of France?", "What is the capital of Germany?", "What is the capital of Poland?"],
    };
    return FakeQuestionnaire;
}(fakeAPI_1.default));
exports.default = FakeQuestionnaire;
//# sourceMappingURL=fakeQuestionnnaire.js.map