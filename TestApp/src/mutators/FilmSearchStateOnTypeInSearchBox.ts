import * as R from 'ramda';
import { FilmSearchState } from "../reducers/FilmSearchReducer";

export const FilmSearchStateOnTypeInSearchBox = (state: FilmSearchState, action: any) => {
    return R.pipe(
        R.assoc('searchTerm', action.payload),
        R.assoc('films', []),
        R.assoc('isLoading', true)
    )(state);
}