import * as R from 'ramda';
import { RootState } from "./RootReducer";

export const TypeInSearchBoxReducer = (state: RootState, action: any) => {
    return R.pipe(
        R.assoc('searchTerm', action.payload),
        R.assoc('films', []),
        R.assoc('isLoading', true)
    )(state);
}