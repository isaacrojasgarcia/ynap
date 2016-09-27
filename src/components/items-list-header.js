import React from 'react';
import { connect } from 'react-redux';
import { Label } from 'react-bootstrap';
import { sortBy } from '../actions'

@connect((store) => {
    return {
        sortedBy: store.list.sortedBy
    }
})
export default class ItemsListHeader extends React.Component {
    sortBy(type) {
        this.props.dispatch(sortBy(type));
    }

    renderSortLabel(type) {
        if(type === this.props.sortedBy) {
            return (
                <Label bsStyle="default">Sorted</Label>
            );
        }
        return null;
    }

    render() {
        return (
            <thead>
                <tr>
                    <th onClick={ this.sortBy.bind(this, 'id') }>Id { this.renderSortLabel('id') }</th>
                    <th onClick={ this.sortBy.bind(this, 'title') }>Title { this.renderSortLabel('title') }</th>
                    <th onClick={ this.sortBy.bind(this, 'price') }>Price { this.renderSortLabel('price') }</th>
                </tr>
            </thead>
        );
    }
}
