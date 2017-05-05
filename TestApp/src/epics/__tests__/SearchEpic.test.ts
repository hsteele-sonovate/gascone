import * as fetchMock from "fetch-mock";
import { ActionsObservable } from "redux-observable";
import { SearchEpic } from "../SearchEpic";
import { SelectYearAction } from "../../actions/SelectYearAction";
import { SearchCompletedAction } from "../../actions/SearchCompletedAction";
import { TypeInSearchBoxAction } from "../../actions/TypeInSearchBoxAction";
import { IFilmResultItem } from "../../transformers/IFilmResultItem_IFilm";

let filmResults: IFilmResultItem[] = [
    {
        Poster: "aaa",
        Title: "Some",
        Type: "Here",
        Year: "10-10-2017",
        imdbID: "some"
    }
];
let searchString = "Godfather";
let searchYear = "10-10-2017";
let mockState = {
    getState: () => {
        return {
            FilmSearchReducer: {
                searchTerm: searchString,
                selectedYear: searchYear
            }
        }
    }
};

describe("Search Epic", () => {

    it("searches for films and returns search complete action on type search input", (done) => {

        fetchMock
            .mock(
                `http://www.omdbapi.com/?s=${searchString}&y=${searchYear}`,
                { Search: filmResults }
            );
        
        SearchEpic(
            ActionsObservable.of(TypeInSearchBoxAction(searchString)),
            mockState
        )
        .subscribe((action) => {
            expect(action).toEqual(SearchCompletedAction(filmResults));
            done();
        });
    });
    
    it("searches for films and returns search complete action on year change", (done) => {
        
        fetchMock
            .mock(
                `http://www.omdbapi.com/?s=${searchString}&y=${searchYear}`,
                { Search: filmResults }
            );
        
        SearchEpic(
            ActionsObservable.of(SelectYearAction(searchString)),
            mockState
        )
        .subscribe((action) => {
            expect(action).toEqual(SearchCompletedAction(filmResults));
            done();
        });
    });
    
});