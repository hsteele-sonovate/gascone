import * as fetchMock from "fetch-mock";
import { ActionsObservable } from "redux-observable";
import { SearchEpic } from "../SearchEpic";
import { SearchCompletedAction } from "../../actions/SearchCompletedAction";
import { TypeInSearchBoxAction } from "../../actions/TypeInSearchBoxAction";
import { IFilmResultItem }  from "../../transformers/IFilmResultItem_IFilm";

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
let typeInSearchBoxAction = ActionsObservable.of(TypeInSearchBoxAction(searchString));
let searchCompleteAction = SearchCompletedAction(filmResults);

describe("Search Epic", () => {
    it("returns films and search complete event", (done) => {

        fetchMock
            .mock(
                `http://www.omdbapi.com/?s=${searchString}&y=`,
                { Search: filmResults }
            );
        
        SearchEpic(
            typeInSearchBoxAction,
            {
                getState: () => {
                    return {
                        FilmSearchReducer: {
                            searchTerm: searchString,
                            selectedYear: ""
                        }
                    }
                }
            }
        )
        .subscribe((action) => {
            expect(action).toEqual(searchCompleteAction);
            done();
        });
    });
});