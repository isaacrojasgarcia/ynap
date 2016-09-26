import React from 'react';
// import CreateItem from './create-item';
import ItemsList from './items-list';

const items = [{
    id: '2d7ece80-837b-11e6-872a-0daae21ecf34',
    title: 'Avery cotton and silk-blend crepe top',
    price: 242.50
},{
    id: '4659b8c0-837b-11e6-b595-0d22998bb5c9',
    title: 'Larchmont crepe wide-leg pants',
    price: 276.00
},{
    id: '526e8690-837b-11e6-8ba6-ddea94f4e31f',
    title: 'a',
    price: 277.00
}];

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items
        };
    }

    render() {
        return (
            <div>
                <h1>YOOX Net a Porter test</h1>
                <ItemsList items={ this.state.items }/>
            </div>
        );
    }
}
