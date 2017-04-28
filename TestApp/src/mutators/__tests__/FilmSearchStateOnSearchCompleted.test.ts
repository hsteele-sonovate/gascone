import { FilmSearchStateOnSearchCompleted } from "../FilmSearchStateOnSearchCompleted";
import { FilmSearchReducer, FilmSearchState, IFilmSearchReducerAction } from "../../reducers/FilmSearchReducer";

it("it mutates film search state on search complete correctly", () => {
    
    let action:IFilmSearchReducerAction = {
        type: "SEARCH_COMPLETED",
        payload: "",
        films: [
            {
                Poster: "aaa", 
                Title: "bbb",
                Type: "ccc",
                Year: "ddd",
                imdbID: "fff"
            }
        ]
    };

    expect(FilmSearchStateOnSearchCompleted(new FilmSearchState(), action))
    .toEqual({
        selectedYear: "",
        searchTerm: "",
        films: action.films,
        isLoading: false
    });
});