import { FilmSearchStateOnSearchCompleted } from "../../src/mutators/FilmSearchStateOnSearchCompleted";
import { FilmSearchReducer, FilmSearchState, IFilmSearchReducerAction } from "../../src/reducers/FilmSearchReducer";

it("Search completed action reduces correctly to statels -l", () => {
    
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

    expect(
        FilmSearchStateOnSearchCompleted(new FilmSearchState(), action)
    )
    .toEqual({
        selectedYear: "",
        searchTerm: "",
        films: action.films,
        isLoading: false
    });
});