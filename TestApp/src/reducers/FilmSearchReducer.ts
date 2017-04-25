import * as R from 'ramda';
import { SelectYearReducer } from "./SelectYearReducer";
import { TypeInSearchBoxReducer } from "./TypeInSearchBoxReducer";
import { SearchCompletedReducer } from "./SearchCompletedReducer";

export class FilmSearchState {
    selectedYear: string = "";
    searchTerm: string = '';
    films: Object[] = [];
    isLoading: boolean = false;
}

export const FilmSearchReducer = (state: FilmSearchState = new FilmSearchState(), action: any) => {
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