import * as React from "react";
import { render } from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
/// entry point of the application

import thunkMiddleware from 'redux-thunk';
import { Route, hashHistory, Router } from 'react-router';
import Layout from './containers/layout';
import RootReducer from './reducers/rootReducer';
import NotFound from './components/notFound';
import Questionnaire from './containers/questionnaire';

// create redux store that will store the application state
var store = createStore<any>(
    RootReducer,
    applyMiddleware(thunkMiddleware),
)

render(
    <div>
        <Provider store={store}>
            <Router history={hashHistory}>
                <Route component={Layout}>
                    <Route path='/Questionnaire' component={Questionnaire} />
                    <Route path='*' component={NotFound} />
                </Route>
            </Router>
        </Provider>
    </div>,
    document.getElementById("root")
);