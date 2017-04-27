import { FilmSearchActions } from "./Actions";

export interface ITypeInSearchBoxAction {
    type: FilmSearchActions;
    payload: string;
}

export const TypeInSearchBoxAction = (searchTerm:string):ITypeInSearchBoxAction => {
    return {
        type: 'TYPE_IN_SEARCH_BOX',
        payload: searchTerm
    };
}