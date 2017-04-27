import * as R from 'ramda';
import { FilmSearchState, IFilmSearchReducerAction } from "../reducers/FilmSearchReducer";

export const FilmSearchStateOnSearchCompleted = (state: FilmSearchState, action: IFilmSearchReducerAction) => {
    return R.pipe(
        R.assoc('films', action.films),
        R.assoc('isLoading', false)
    )(state);
}