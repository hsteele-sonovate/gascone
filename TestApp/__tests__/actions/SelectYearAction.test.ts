import { SelectYearAction } from "../../src/actions/SelectYearAction";

it("Takes year and generates a year selected film search action", () => {
    let year = "10-02-2017";
    expect(SelectYearAction(year))
    .toEqual({
        type: "SELECT_YEAR",
        payload: year
    });
})