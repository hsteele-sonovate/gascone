import * as R from 'ramda';
import { FilmSearchState, IFilmSearchReducerAction } from "../reducers/FilmSearchReducer";

export const FilmSearchStateOnSelectYear = (state: FilmSearchState, action: IFilmSearchReducerAction) => {
    return R.pipe(
        R.assoc('selectedYear', action.payload),
        R.assoc('films', []),
        R.assoc('isLoading', true)
    )(state);
}