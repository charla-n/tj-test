declare var require;

import { combineReducers } from 'redux';
import { questionnaireReducer } from './questionnaireReducer';
var ReduxForm = require('redux-form');

// init all reducers the application needs
const RootReducer = combineReducers({
    questionnaire: questionnaireReducer,
    form: ReduxForm.reducer,
});

export default RootReducer;