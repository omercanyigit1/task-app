import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import createLogger from 'redux-logger';
import thunk from "redux-thunk";
import {Provider} from 'react-redux';

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0";
import "./assets/css/demo.css";
import "./assets/css/pe-icon-7-stroke.css";

import rootReducer from './reducers';
import App from "./App";

const appStore = createStore(rootReducer, {}, applyMiddleware(thunk, createLogger));

ReactDOM.render(
    <Provider store={appStore}>
        <App />
    </Provider>,
    document.getElementById("root")
);
