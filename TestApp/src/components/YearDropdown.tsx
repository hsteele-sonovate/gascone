import * as React from "react";
import * as R from "ramda";

export interface IYearDropdownProps {
    selected: string,
    onChange: (event: string) => void
}

const from = 1900;
const to = 2017;

export const YearDropdown = (props: IYearDropdownProps) => {
    return (
        <div className="year-dropdown">
            <label>Year:</label>
            <select
                className="year-dropdown__control"
                value={props.selected}
                onChange={(e) => {props.onChange(e.currentTarget.value)}}
            >
                <option value="">Any</option>
                {
                    R.range(from, to + 1)
                    .map((year) => year.toString())
                    .map((year) => {
                        return (
                            <option
                                key={year}
                                value={year}
                            >
                                {year}
                            </option>
                        );
                    })
                }
            </select>
        </div>
    )
};