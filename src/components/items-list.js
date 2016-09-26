import _ from 'lodash';
import React from 'react'
import ItemsListHeader from './items-list-header';
import ListItem from './list-item';
import CreateItem from '../containers/create-item';
import { Table, Panel } from 'react-bootstrap';

import { connect } from 'react-redux';
import { getAll } from '../actions';

class ItemsList extends React.Component {
    static fetchData(dispatch) {
        dispatch(getAll());
    }

    componentWillMount () {
        if (!this.props.items) {
            this.constructor.fetchData(this.props.dispatch);
        }
    }

    renderItems() {
        console.log('rendering items', this.props.items);
        return _.map(this.props.items, (item, index) => <ListItem key={index} {...item} />);
    }

    render() {
        return (
            <div>
                <Panel>
                    <CreateItem/>
                </Panel>

                <Panel header="Items List">
                    <Table striped condensed hover>
                        <ItemsListHeader/>
                        <tbody>
                        { this.renderItems() }
                        </tbody>
                    </Table>
                </Panel>
            </div>
        );
    }
}

ItemsList = connect(
    state => ({ items: state.items })
)(ItemsList);
export default ItemsList;
