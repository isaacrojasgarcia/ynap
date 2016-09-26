import _ from 'lodash';
import uuid from 'node-uuid'
import React from 'react';
import ItemsListHeader from './items-list-header';
import ListItem from './list-item';
import CreateItem from './create-item';

export default class ItemsList extends React.Component {
    renderItems() {
        return _.map(this.props.items, (item, index) => <ListItem key={index} {...item} />);
    }

    render() {
        return (
            <div>
                <CreateItem createItem={ this.createItem.bind(this) } items={ this.props.items }/>

                <div> Items List </div>
                <table>
                    <ItemsListHeader/>
                    <tbody>
                        { this.renderItems() }
                    </tbody>
                </table>
            </div>
        );
    }

    createItem(it) {
        this.props.items.push(_.extend(it, {id: uuid.v1()}));
        this.setState({ items: this.props.items });
        // console.log(this.props.items);
    }
}
