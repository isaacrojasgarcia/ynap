import React from 'react';
// import CreateItem from './create-item';
import ItemsList from './items-list';

const items = [{
    id: 1,
    title: 'Avery cotton and silk-blend crepe top',
    price: 242.50
},{
    id: 837681,
    title: 'Larchmont crepe wide-leg pants',
    price: 276.00
},{
    id: 3,
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
