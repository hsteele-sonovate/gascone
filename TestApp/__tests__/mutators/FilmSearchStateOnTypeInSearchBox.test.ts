import { FilmSearchStateOnSelectYear } from "../../src/mutators/FilmSearchStateOnSelectYear";
import { FilmSearchReducer, FilmSearchState, IFilmSearchReducerAction } from "../../src/reducers/FilmSearchReducer";

it("mutate shamte", () => {
    
    let selectedYear = "10-02-2017";
    let action:IFilmSearchReducerAction = {
        type: "SELECT_YEAR",
        payload: selectedYear,
        films: []
    };

    expect(
        FilmSearchStateOnSelectYear(new FilmSearchState(), action)
    )
    .toEqual({
        selectedYear: selectedYear,
        searchTerm: "",
        films: [],
        isLoading: true
    });
});