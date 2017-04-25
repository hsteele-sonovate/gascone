import * as R from 'ramda';
import { RootState } from "./RootReducer";

export const SearchCompletedReducer = (state: RootState, action: any) => {
    return R.pipe(
        R.assoc('films', action.films),
        R.assoc('isLoading', false)
    )(state);
}