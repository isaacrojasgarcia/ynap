import _ from 'lodash';
import uuid from 'node-uuid'
import React from 'react';
import ItemsListHeader from './items-list-header';
import ListItem from './list-item';
import CreateItem from './create-item';
import { Table, Panel } from 'react-bootstrap';

export default class ItemsList extends React.Component {
    renderItems() {
        return _.map(this.props.items, (item, index) => <ListItem key={index} {...item} />);
    }

    render() {
        return (
            <div>
                <Panel>
                    <CreateItem createItem={ this.createItem.bind(this) } items={ this.props.items }/>
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

    createItem(it) {
        this.props.items.push(_.extend(it, {id: uuid.v1()}));
        this.setState({ items: this.props.items });
        // console.log(this.props.items);
    }
}
