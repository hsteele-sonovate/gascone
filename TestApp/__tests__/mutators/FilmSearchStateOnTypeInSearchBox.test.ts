import { FilmSearchStateOnTypeInSearchBox } from "../../src/mutators/FilmSearchStateOnTypeInSearchBox";
import { FilmSearchReducer, FilmSearchState, IFilmSearchReducerAction } from "../../src/reducers/FilmSearchReducer";

it("mutates film search state on type in search box action correctly", () => {
    
    let searchQuery = "who what there";
    let action:IFilmSearchReducerAction = {
        type: "TYPE_IN_SEARCH_BOX",
        payload: searchQuery,
        films: []
    };

    expect(FilmSearchStateOnTypeInSearchBox(new FilmSearchState(), action))
    .toEqual({
        selectedYear: "",
        searchTerm: searchQuery,
        films: [],
        isLoading: true
    });
});