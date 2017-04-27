import * as React from "react";
import * as R from "ramda";
import "../../../styles/search-box.less";

export interface ISearchBoxProps {
    searchTerm: string,
    onChange: (event: string) => void
}

export const SearchBox = (props: ISearchBoxProps) => {
    return (
        <div className="search-box">
            <input
                placeholder="Film Name"
                className="search-box__input"
                type="text"
                value={props.searchTerm}
                onChange={(e) => {props.onChange(e.currentTarget.value)}}
            />
        </div>
    )
};