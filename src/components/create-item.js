import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Form, FormGroup, FormControl, Col, ControlLabel } from 'react-bootstrap';

export default class CreateItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            errorMsg: ''
        };
    }

    renderError() {
        if (!this.state.error) { return null; }
        return <div style={{ color: 'red' }}>{ this.state.errorMsg }</div>;
    }

    render() {
        return (
            <Form horizontal>
                <FormGroup bsSize="large" validationState={ this.state.error }>
                    <Col componentClass={ControlLabel} sm={2}>Title</Col>
                    <Col sm={10}>
                        <FormControl type="text" placeholder="Item title" ref={ ref => this.titleInput = ref }/>
                    </Col>
                </FormGroup>
                <FormGroup bsSize="large">
                    <Col componentClass={ControlLabel} sm={2}>Price</Col>
                    <Col sm={10}>
                        <FormControl type="text" placeholder="Item price" ref={ ref => this.priceInput = ref }/>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col smOffset={2} sm={10}>
                        <Button onClick={ this.handleCreate.bind(this) }>Create</Button>
                    </Col>
                </FormGroup>
                { this.renderError() }
            </Form>
        );
    }

    handleCreate(event) {
        event.preventDefault();

        const titleInput = ReactDOM.findDOMNode(this.titleInput).value;
        const priceInput = ReactDOM.findDOMNode(this.priceInput).value;;
        const validateInput = this.validateInput(titleInput);

        if (validateInput) {
            this.setState({ error: 'error', errorMsg: validateInput });
            return;
        }

        var buildItem = (title, price) => ({
            title: title,
            price: price
        });

        this.setState({ error: 'success', errorMsg: null });
        this.props.createItem(buildItem(titleInput, priceInput));

        // this.refs.titleInput.value = '';
        // this.refs.priceInput.value = '';
    }

    validateInput(t) {
        if (!t) {
            return 'Please enter a title for the item';
        }
        else if (_.find(this.props.items, item => item.title === t)) {
            return 'Item already exists';
        }
        else {
            return null;
        }
    }
}
