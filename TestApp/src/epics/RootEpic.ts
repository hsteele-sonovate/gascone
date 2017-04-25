import { combineEpics } from "redux-observable";

import { SearchEpic } from "./SearchEpic";

export const RootEpic = combineEpics(
    SearchEpic
);