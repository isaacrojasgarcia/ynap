import _ from 'lodash';
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
                <div> Items List </div>
                <CreateItem createItem={ this.createItem.bind(this) }/>
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
        console.log(it);
    }
}
