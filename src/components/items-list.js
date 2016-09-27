import _ from 'lodash';

import React from 'react'
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';

import ItemsListHeader from './items-list-header';
import ListItem from './list-item';

import { getAllItems } from '../actions';


@connect((store) => {
    return {
        items: store.list.items
    }
})
export default class ItemsList extends React.Component {
    componentWillMount() {
        this.props.dispatch(getAllItems());
    }

    renderItems() {
        return _.map(this.props.items, (item, index) => <ListItem key={index} {...item} />);
    }

    render() {
        return (
            <Table striped condensed hover>
                <ItemsListHeader/>
                <tbody>
                { this.renderItems() }
                </tbody>
            </Table>
        );
    }
}
