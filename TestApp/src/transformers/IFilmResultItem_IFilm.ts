import * as R from "ramda";

export interface IFilmResultItem {
    Poster: string, 
    Title: string,
    Type: string,
    Year: string,
    imdbID: string
}

export interface IFilm {
    Poster: string, 
    Title: string,
    Type: string,
    Year: string,
    imdbID: string
}

let defaultPosterUrl = "http://www.ckconsumables.com/Content/Images/no_image_placeholder.png";
let noPosterPresentValue = "N/A";

export function FilmItem_IFilm(filmItem:IFilmResultItem) {
    return filmItem.Poster === noPosterPresentValue ? R.assoc('Poster', defaultPosterUrl, filmItem) : filmItem;
}

export function IFilm_FilmItem(filmItem:IFilmResultItem) {
    return filmItem.Poster === defaultPosterUrl ? R.assoc('Poster', noPosterPresentValue, filmItem) : filmItem;
}