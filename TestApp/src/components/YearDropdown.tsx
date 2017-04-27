import * as React from "react";
import * as R from "ramda";
import "../../../styles/dropdown.less";

export interface IYearDropdownProps {
    selected: string,
    onChange: (event: string) => void
}

const from = 1900;
const to = 2017;

export const YearDropdown = (props: IYearDropdownProps) => {
    return (
        <div className="dropdown">
            <select
                className="dropdown__control"
                value={props.selected}
                onChange={(e) => {props.onChange(e.currentTarget.value)}}
            >
                <option value="">Any Year</option>
                {
                    R.range(from, to + 1)
                    .map((year) => year.toString())
                    .reverse()
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