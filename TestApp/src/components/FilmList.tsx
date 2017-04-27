import * as React from "react";
import { FilmListingItem } from "./FilmListingItem";
import "../../../styles/film-list.less";

export interface IFilmListProps { 
    films: Object[]; 
    isLoading: boolean 
}

export const FilmList = (props: IFilmListProps) => 
    <div className="film-list">
        <div className="film-list__body">
            {props.films.map((film) => (
                <FilmListingItem
                    key={film['imdbID']}
                    film={film}
                />
            ))}
            { props.films.length === 0 && ! props.isLoading &&
                <div 
                    className="film-list__text" 
                    style={{textAlign:"center"}}
                >No results</div>
            }
            { props.isLoading &&
                <div className="film-list__loader"></div>
            }
        </div>
    </div>
;