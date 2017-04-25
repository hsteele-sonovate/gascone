import * as R from 'ramda';
import { FilmSearchState } from "../reducers/FilmSearchReducer";

export const FilmSearchStateOnSelectYear = (state: FilmSearchState, action: any) => {
    return R.pipe(
        R.assoc('selectedYear', action.payload),
        R.assoc('films', []),
        R.assoc('isLoading', true)
    )(state);
}