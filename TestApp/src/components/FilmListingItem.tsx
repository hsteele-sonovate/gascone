import * as React from "react";
import "../../../styles/film.less";

export interface IFilmListingItemProps { film: Object; }

export const FilmListingItem = (props: IFilmListingItemProps) => 
    <div className="film">
        <div className="film__poster">
            <img style={{width: "100px"}} src={ props.film['Poster'] } />
        </div>
        <div className="film__details">
            <h4 className="film__title">{props.film['Title']}</h4>
            <p className="film__date">{props.film["Year"]}</p>
        </div>
    </div>
;