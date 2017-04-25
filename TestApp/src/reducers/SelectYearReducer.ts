import * as R from 'ramda';
import { RootState } from "./RootReducer";

export const SelectYearReducer = (state: RootState, action: any) => {
    return R.pipe(
        R.assoc('selectedYear', action.payload),
        R.assoc('films', []),
        R.assoc('isLoading', true)
    )(state);
}