import "rxjs";
import { Action } from "redux";
import * as R from "ramda";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/map";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/mergeMap";

export var SearchEpic: any = (action$: any, store: any): any => {
    return action$
        .filter((action) => {
            return action.type === 'SELECT_YEAR' || action.type === 'TYPE_IN_SEARCH_BOX'
        })
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
        .map(jsonItems => {
            return jsonItems.map((jsonItem) => {
                if (jsonItem['Poster'] === 'N/A') {
                    return R.assoc('Poster', 'http://www.ckconsumables.com/Content/Images/no_image_placeholder.png', jsonItem);
                }
                return jsonItem;
            });
        })
        .map((results) => {
            console.log("i did it ma");
            return {
                type: 'SEARCH_COMPLETED',
                films: results
            }
        });
}