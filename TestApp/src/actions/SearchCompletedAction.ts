import { FilmSearchActions } from "./Actions";
import { IFilm } from "../transformers/IFilmResultItem_IFilm";

export interface ISearchCompletedAction {
    type: FilmSearchActions;
    films: IFilm[];
}

export const SearchCompletedAction = (filmResults:IFilm[]):ISearchCompletedAction => {
    return {
        type: 'SEARCH_COMPLETED',
        films: filmResults
    };
}