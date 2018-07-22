import React, { Component } from 'react';
import Item from './Item'

export default class List extends Component {
    render() {
        const {list, onCheck, onModify} = this.props;
        let listInfo = []
        list.map( item => {
            listInfo.push(
            <Item
                id={item.id}
                key={item.id}
                text={item.text}
                complete={item.complete}
                onCheck={onCheck}
                onModify={onModify}
            />)
        })
        return (
            <ol>
                {listInfo}
            </ol>
        );
    }
}