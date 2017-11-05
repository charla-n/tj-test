"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var questionnaireReducer_1 = require("./questionnaireReducer");
var ReduxForm = require('redux-form');
// init all reducers the application needs
var RootReducer = redux_1.combineReducers({
    questionnaire: questionnaireReducer_1.questionnaireReducer,
    form: ReduxForm.reducer,
});
exports.default = RootReducer;
//# sourceMappingURL=rootReducer.js.map