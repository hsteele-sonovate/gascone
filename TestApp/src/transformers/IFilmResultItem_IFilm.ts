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

export const defaultPosterUrl = "http://www.ckconsumables.com/Content/Images/no_image_placeholder.png";
export const noPosterPresentValue = "N/A";

export function IFilmResultItem_IFilm(filmResultItem:IFilmResultItem) {
    return filmResultItem.Poster === noPosterPresentValue ? R.assoc('Poster', defaultPosterUrl, filmResultItem) : filmResultItem;
}

export function IFilm_IFilmResultItem(film:IFilm) {
    return film.Poster === defaultPosterUrl ? R.assoc('Poster', noPosterPresentValue, film) : film;
}