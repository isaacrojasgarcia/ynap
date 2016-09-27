import React from 'react';
import { Panel } from 'react-bootstrap';

import ItemsList from './items-list';
import CreateItem from './create-item';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <h1>-</h1>
                <Panel>
                    <CreateItem/>
                </Panel>

                <Panel header="Items List">
                    <ItemsList/>
                </Panel>

            </div>
        );
    }
}
