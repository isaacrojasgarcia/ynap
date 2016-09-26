import React from 'react';
import ItemsList from './items-list';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <h1>YNAP</h1>
                <ItemsList/>
            </div>
        );
    }
}
