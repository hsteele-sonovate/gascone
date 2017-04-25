import * as R from 'ramda';
import { FilmSearchState } from "./FilmSearchReducer";

export const SearchCompletedReducer = (state: FilmSearchState, action: any) => {
    return R.pipe(
        R.assoc('films', action.films),
        R.assoc('isLoading', false)
    )(state);
}