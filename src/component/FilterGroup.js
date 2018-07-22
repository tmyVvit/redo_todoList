import React, { Component } from 'react';
import Filter from './Filter'
import * as fType from '../constant/filterType'
export default class FilterGroup extends Component {
    render() {
        const {filter, onSetFilter} = this.props;
        return (
            <div>
                <ul id="filters">
                <li>
                    <Filter
                        href="#"
                        filter={fType.ALL}
                        pageFilter={filter}
                        filterName="All"
                        onSetFilter={onSetFilter}
                    />
                    <Filter
                        href="#"
                        filter={fType.ACTIVE}
                        pageFilter={filter}
                        filterName="Active"
                        onSetFilter={onSetFilter}
                    />
                    <Filter
                        href="#"
                        filter={fType.COMPLETE}
                        pageFilter={filter}
                        filterName="Complete"
                        onSetFilter={onSetFilter}
                    />
                </li>
                </ul>
            </div>
        );
    }
}