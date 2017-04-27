import * as R from 'ramda';
import { FilmSearchState, IFilmSearchReducerAction } from "../reducers/FilmSearchReducer";

export const FilmSearchStateOnTypeInSearchBox = (state: FilmSearchState, action: IFilmSearchReducerAction) => {
    return R.pipe(
        R.assoc('searchTerm', action.payload),
        R.assoc('films', []),
        R.assoc('isLoading', true)
    )(state);
}