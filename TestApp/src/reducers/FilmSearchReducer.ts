import * as R from 'ramda';

import { FilmSearchActions } from "../actions/Actions";
import { FilmSearchStateOnSelectYear } from "../mutators/FilmSearchStateOnSelectYear";
import { FilmSearchStateOnTypeInSearchBox } from "../mutators/FilmSearchStateOnTypeInSearchBox";
import { FilmSearchStateOnSearchCompleted } from "../mutators/FilmSearchStateOnSearchCompleted";
import { IFilm } from "../transformers/IFilmResultItem_IFilm";

export class FilmSearchState {
    selectedYear: string = "";
    searchTerm: string = '';
    films: Object[] = [];
    isLoading: boolean = false;
}

export interface IFilmSearchReducerAction {
    type: FilmSearchActions,
    payload: string,
    films: IFilm[]
}
 
export const FilmSearchReducer = (
    state: FilmSearchState = new FilmSearchState(), 
    action: IFilmSearchReducerAction
) => {
    switch (action.type) {
        case 'SELECT_YEAR': 
            return FilmSearchStateOnSelectYear(state, action);
        case 'TYPE_IN_SEARCH_BOX':
            return FilmSearchStateOnTypeInSearchBox(state, action);
        case 'SEARCH_COMPLETED':
            return FilmSearchStateOnSearchCompleted(state, action);
    default:
        return state
    }
}