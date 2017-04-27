import { FilmSearchActions } from "./Actions";

export interface SelectYearAction {
    type: FilmSearchActions;
    payload: string;
}

export const SelectYearAction = (year:string):SelectYearAction => {
    return {
        type: 'SELECT_YEAR',
        payload: year
    };
}