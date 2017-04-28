import nock from "nock";
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
        nock.clanAll();
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

        // nock("http://www.omdbapi.com")
        //     .get(`?s=Godfather&y=10-02-2000`)
        //     .reply(200, filmResults);

    });
});