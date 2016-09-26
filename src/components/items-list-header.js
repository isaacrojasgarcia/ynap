import React from 'react';

export default class ItemsListHeader extends React.Component {
    render() {
        return (
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Price</th>
                </tr>
            </thead>
        );
    }
}
