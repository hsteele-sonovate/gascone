import { FilmSearchActions } from "./Actions";

export interface ISelectYearAction {
    type: FilmSearchActions;
    payload: string;
}

export const SelectYearAction = (year:string):ISelectYearAction => {
    return {
        type: 'SELECT_YEAR',
        payload: year
    };
}