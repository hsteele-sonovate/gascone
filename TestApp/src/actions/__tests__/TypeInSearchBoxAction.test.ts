import { TypeInSearchBoxAction } from "../TypeInSearchBoxAction";

it("Takes film search query and makes a film search action", () => {
    let searchQuery = "What up boy";
    expect(TypeInSearchBoxAction(searchQuery))
    .toEqual({
        type: "TYPE_IN_SEARCH_BOX",
        payload: searchQuery
    });
})