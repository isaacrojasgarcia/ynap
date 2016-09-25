import React from 'react';

export default class CreateItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null
        };
    }

    renderError() {
        if (!this.state.error) { return null; }
        return <div style={{ color: 'red' }}>{ this.state.error }</div>;
    }

    render() {
        return (
            <form onSubmit={ this.handleCreate.bind(this) }>
                <input type="text" placeholder="Item title" ref="titleInput" />
                <input type="text" placeholder="Item price" ref="priceInput" />
                <button>Create</button>
                { this.renderError() }
            </form>
        );
    }

    handleCreate(event) {
        event.preventDefault();

        const titleInput = this.refs.titleInput;
        const validateInput = this.validateInput(titleInput.value);
        console.log(validateInput);

        if (validateInput) {
            this.setState({ error: validateInput });
            return;
        }

        this.setState({ error: null });
        this.props.createItem(titleInput.value);
        this.refs.titleInput.value = '';
    }

    validateInput(t) {
        if (!t) {
            return 'Please enter a title for the item';
        }
        else if (_.find(this.props.items, item => item.title === t)) {
            return 'Task already exists';
        }
        else {
            return null;
        }
    }
}
