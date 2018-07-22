import React, { Component } from 'react';

export default class Filter extends Component {
    render() {
        const {href, filter, pageFilter, filterName, onSetFilter} = this.props;
        return (
            <a
                href = {href}
                data-filter={filter}
                className={pageFilter===filter?"selected":""}
                onClick={()=>onSetFilter(filter)}
            >
            {filterName}
            </a>
        );
    }
}