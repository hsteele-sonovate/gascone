import * as Transfomer from "../IFilmResultItem_IFilm";

describe("IFilmResultItem and IFilm Transformation", () => {

    let FilmResultItem: Transfomer.IFilmResultItem = {
        Poster: Transfomer.noPosterPresentValue,
        Title: "Some",
        Type: "Here",
        Year: "10-10-2017",
        imdbID: "some"
    };
    
    let Film: Transfomer.IFilm = {
        Poster: Transfomer.defaultPosterUrl,
        Title: "Some",
        Type: "Here",
        Year: "10-10-2017",
        imdbID: "some"
    }
    
    it("maps IFilmResultItem to IFilm", () => {
        expect(Transfomer.IFilmResultItem_IFilm(FilmResultItem))
        .toEqual(Film);
    });

    it("maps IFilm to IFilmResultItem", () => {
        expect(Transfomer.IFilm_IFilmResultItem(Film))
        .toEqual(FilmResultItem);
    });
});