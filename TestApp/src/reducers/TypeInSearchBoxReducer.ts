import * as R from 'ramda';
import { FilmSearchState } from "./FilmSearchReducer";

export const TypeInSearchBoxReducer = (state: FilmSearchState, action: any) => {
    return R.pipe(
        R.assoc('searchTerm', action.payload),
        R.assoc('films', []),
        R.assoc('isLoading', true)
    )(state);
}