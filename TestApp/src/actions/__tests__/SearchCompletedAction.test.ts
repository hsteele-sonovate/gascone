import { SearchCompletedAction } from "../SearchCompletedAction";
import { IFilm } from "../../transformers/IFilmResultItem_IFilm";

it("Takes transformed search film results and makes a search completed action", () => {

    let films: IFilm[] = [
        {
            Poster: "Some",
            Title: "Here",
            Type: "typos",
            Year: "yearos",
            imdbID: "12323"
        }
    ];

    expect(SearchCompletedAction(films))
    .toEqual({
        type: "SEARCH_COMPLETED",
        films: films
    });
})