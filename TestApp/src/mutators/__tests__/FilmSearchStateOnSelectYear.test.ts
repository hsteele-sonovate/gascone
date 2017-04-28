import { FilmSearchStateOnSelectYear } from "../FilmSearchStateOnSelectYear";
import { FilmSearchReducer, FilmSearchState, IFilmSearchReducerAction } from "../../reducers/FilmSearchReducer";

it("mutates film search state on select year correctly", () => {
    
    let selectedYear = "10-02-2017";
    let action:IFilmSearchReducerAction = {
        type: "SELECT_YEAR",
        payload: selectedYear,
        films: []
    };

    expect(FilmSearchStateOnSelectYear(new FilmSearchState(), action))
    .toEqual({
        selectedYear: selectedYear,
        searchTerm: "",
        films: [],
        isLoading: true
    });
});