import * as R from 'ramda';
import { SelectYearReducer } from "./SelectYearReducer";
import { TypeInSearchBoxReducer } from "./TypeInSearchBoxReducer";
import { SearchCompletedReducer } from "./SearchCompletedReducer";

export class RootState {
    selectedYear: string = "";
    searchTerm: string = '';
    films: Object[] = [];
    isLoading: boolean = false;
}

export const RootReducer = (state: RootState = new RootState(), action: any) => {
    switch (action.type) {
        case 'SELECT_YEAR':
            return SelectYearReducer(state, action);
        case 'TYPE_IN_SEARCH_BOX':
            return TypeInSearchBoxReducer(state, action);
        case 'SEARCH_COMPLETED':
            return SearchCompletedReducer(state, action);
    default:
        return state
    }
}