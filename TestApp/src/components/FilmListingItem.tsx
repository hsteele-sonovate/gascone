import * as React from "react";

export interface IFilmListingItemProps { film: Object; }

export const FilmListingItem = (props: IFilmListingItemProps) => 
    <div className="media">
        <div className="media-left">
            <img style={{width: "100px"}} src={ props.film['Poster'] } />
        </div>
        <div className="media-body">
            <h4 className="media-heading">{props.film['Title']}</h4>
            <p><strong>Year:</strong> {props.film["Year"]}</p>
        </div>
        <hr/>
    </div>;