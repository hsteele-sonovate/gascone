import { Actions } from "./Actions";

export interface SelectYearAction {
    type: Actions.SelectYear;
    payload: string;
}

export const SelectYearAction = (year:string):SelectYearAction => {
    return {
        type: Actions.SelectYear,
        payload: year
    };
}