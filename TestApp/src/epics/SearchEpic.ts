import "rxjs";
import { Action } from "redux";
import * as R from "ramda";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/map";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/mergeMap";

import { IFilmResultItem, IFilm, IFilmResultItem_IFilm } from "../transformers/IFilmResultItem_IFilm";
import { SearchCompletedAction } from "../actions/SearchCompletedAction";

export var SearchEpic: any = (action$: any, store: any): any => {
    return action$
        .filter((action) => action.type === 'SELECT_YEAR' || action.type === 'TYPE_IN_SEARCH_BOX')
        .debounceTime(250)
        .mergeMap((action) => 
            fetch(`http://www.omdbapi.com/?s=${store.getState().FilmSearchReducer.searchTerm}&y=${store.getState().FilmSearchReducer.selectedYear}`)
        )
        .mergeMap((response) => response.json())
        .map((response) => {
            if (response.Response === 'False') {
                response.Search = [];
            }
            return response;
        })
        .map((json) => json.Search)
        .map((filmItems: IFilmResultItem[]) => filmItems.map(IFilmResultItem_IFilm))
        .map((films: IFilm[]) => SearchCompletedAction(films));
}