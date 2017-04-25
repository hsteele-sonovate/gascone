import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { createEpicMiddleware, combineEpics } from "redux-observable";
import "rxjs";

import { RootEpic } from "./actions/RootEpic";
import { RootReducer } from "./reducers/RootReducer";
import { Body } from "./Body";

const store = createStore(
    RootReducer,
    applyMiddleware(
        createEpicMiddleware(RootEpic)
    )
);

ReactDOM.render(
    <Provider store={store}>
        <Body/>
    </Provider>,
    document.getElementById("app")
);