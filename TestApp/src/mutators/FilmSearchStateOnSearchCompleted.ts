import * as R from 'ramda';
import { FilmSearchState } from "../reducers/FilmSearchReducer";

export const FilmSearchStateOnSearchCompleted = (state: FilmSearchState, action: any) => {
    return R.pipe(
        R.assoc('films', action.films),
        R.assoc('isLoading', false)
    )(state);
}