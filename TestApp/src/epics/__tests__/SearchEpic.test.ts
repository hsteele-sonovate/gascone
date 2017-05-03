import  * as nock from "nock";
import { createEpicMiddleware } from "redux-observable";
import configureMockStore from 'redux-mock-store'
import { SearchEpic } from "../SearchEpic";
import { IFilmResultItem }  from "../../transformers/IFilmResultItem_IFilm";

const epicMiddleware = createEpicMiddleware(SearchEpic);
const mockStore = configureMockStore([epicMiddleware]);

describe("Search Epic", () => {

    let store;

    beforeEach(() => {
        store = mockStore();
    });

    afterEach(() => {
        // nock.clanAll();
        epicMiddleware.replaceEpic(SearchEpic);
    });


    it("something somethigns", () => {

        let filmResults: IFilmResultItem[] = [
            {
                Poster: "aaaa",
                Title: "Some",
                Type: "Here",
                Year: "10-10-2017",
                imdbID: "some"
            }
        ];

        nock("http://www.omdbapi.com")
            .get(`?s=Godfather&y=`)
            .reply(200, filmResults);

        store.dispatch({
            type: 'TYPE_IN_SEARCH_BOX',
            payload: "Godfather"
        });

        expect(store.getActions())
            .toEqual([
                { 
                    type: "SEARCH_COMPLETED",
                    films: filmResults
                }
            ]);

    });
});