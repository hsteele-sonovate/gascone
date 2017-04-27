import * as React from "react";
import { connect, Dispatch } from 'react-redux'
import "../styles/v-film-search.less";

import { YearDropdown } from "../components/YearDropdown";
import { SearchBox } from "../components/SearchBox";
import { FilmList } from "../components/FilmList";
import { FilmSearchState } from "../reducers/FilmSearchReducer";
import { SelectYearAction } from "../actions/SelectYearAction";
import { TypeInSearchBoxAction } from "../actions/TypeInSearchBoxAction";



interface IFilmSearchContainerProps {
    selectedYear: string,
    searchTerm: string,
    films: Object[];
    isLoading: boolean;
    selectYear: (year: string) => void,
    typeInSearchBox: (searchTerm: string) => void
}

let mapStateToProps = (state: { FilmSearchReducer: FilmSearchState }) => {
    return {
        selectedYear: state.FilmSearchReducer.selectedYear,
        searchTerm: state.FilmSearchReducer.searchTerm,
        films: state.FilmSearchReducer.films,
        isLoading: state.FilmSearchReducer.isLoading
    }
}

let mapDispatchToProps = (dispatch: Function) => {
    return {
        selectYear: (year: string): void => dispatch(SelectYearAction(year)),
        typeInSearchBox: (searchTerm: string): void => dispatch(TypeInSearchBoxAction(searchTerm))
    };
}

class FilmSearchContainer extends React.Component<IFilmSearchContainerProps, {}> {
    render() {
        return (
            <div className="v-film-search">
                <div className="v-film-search__controls">
                    <h1 className="v-film-search__title">Film Searcher</h1>
                    <div className="v-film-search__box">
                        <SearchBox
                            searchTerm={this.props.searchTerm}
                            onChange={this.props.typeInSearchBox}
                        />
                    </div>
                    <div className="v-film-search__year-dropdown">
                        <YearDropdown
                            selected={this.props.selectedYear}
                            onChange={this.props.selectYear}
                        />
                    </div>
                </div>
                
                <div className="v-film-search__body">
                    <FilmList
                        films={this.props.films}
                        isLoading={this.props.isLoading}
                    />
                </div>
            </div>
        )
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(FilmSearchContainer);