import React from 'react';
import { connect } from 'react-redux';
import { sortBy } from '../actions'

@connect()
export default class ItemsListHeader extends React.Component {
    sortBy(type) {
        this.props.dispatch(sortBy(type));
    }

    render() {
        return (
            <thead>
                <tr>
                    <th onClick={ this.sortBy.bind(this, 'id') }>Id</th>
                    <th onClick={ this.sortBy.bind(this, 'title') }>Title</th>
                    <th onClick={ this.sortBy.bind(this, 'price') }>Price</th>
                </tr>
            </thead>
        );
    }
}
