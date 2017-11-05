"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_dom_1 = require("react-dom");
var react_redux_1 = require("react-redux");
var redux_1 = require("redux");
/// entry point of the application
var redux_thunk_1 = require("redux-thunk");
var react_router_1 = require("react-router");
var layout_1 = require("./containers/layout");
var rootReducer_1 = require("./reducers/rootReducer");
var notFound_1 = require("./components/notFound");
var questionnaire_1 = require("./containers/questionnaire");
// create redux store that will store the application state
var store = redux_1.createStore(rootReducer_1.default, redux_1.applyMiddleware(redux_thunk_1.default));
react_dom_1.render(React.createElement("div", null,
    React.createElement(react_redux_1.Provider, { store: store },
        React.createElement(react_router_1.Router, { history: react_router_1.hashHistory },
            React.createElement(react_router_1.Route, { component: layout_1.default },
                React.createElement(react_router_1.Route, { path: '/Questionnaire', component: questionnaire_1.default }),
                React.createElement(react_router_1.Route, { path: '*', component: notFound_1.default }))))), document.getElementById("root"));
//# sourceMappingURL=index.js.map