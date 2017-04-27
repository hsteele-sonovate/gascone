import { FilmSearchActions } from "./Actions";

export interface TypeInSearchBoxAction {
    type: FilmSearchActions;
    payload: string;
}

export const TypeInSearchBoxAction = (searchTerm:string):TypeInSearchBoxAction => {
    return {
        type: 'TYPE_IN_SEARCH_BOX',
        payload: searchTerm
    };
}