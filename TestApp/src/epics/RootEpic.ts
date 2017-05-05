import { combineEpics } from "redux-observable";
import { ajax } from 'rxjs/observable/dom/ajax';

import { SearchEpic } from "./SearchEpic";

export const RootEpic = combineEpics(
    SearchEpic
);