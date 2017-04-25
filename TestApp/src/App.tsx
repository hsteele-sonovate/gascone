import * as React from "react";
import * as ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { createEpicMiddleware, combineEpics } from "redux-observable";
import "rxjs";

import { Body } from "./Body";
// we should be in a position from which we dont have to specify every new 
// reducer and epic in the app file. Subject to further investigation how to do it
import { FilmSearchReducer } from "./reducers/FilmSearchReducer";
import { testEpic } from "./actions/SearchEpic";

const rootEpic = combineEpics(testEpic);
const epicMiddleware = createEpicMiddleware(rootEpic);
const store = createStore(FilmSearchReducer, applyMiddleware(epicMiddleware));

ReactDOM.render(
    <Provider store={store}>
        <Body/>
    </Provider>,
    document.getElementById("app")
);