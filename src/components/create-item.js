import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, FormControl, Col, ControlLabel, Alert } from 'react-bootstrap';
import { addItem } from '../actions';

@connect()
export default class CreateItemComponent extends React.Component {
    handleCreate(e) {
        e.preventDefault();
        const title = ReactDOM.findDOMNode(this.titleInput);
        const price = ReactDOM.findDOMNode(this.priceInput);

        this.props.dispatch(addItem(title.value, price.value));
        title.value = '';
        price.value = '';
        title.focus();
    }

    render() {
        return (
            <Form horizontal onSubmit={ this.handleCreate.bind(this) }>
                <FormGroup bsSize="large">
                    <Col componentClass={ControlLabel} sm={2}>Title</Col>
                    <Col sm={10}>
                        <FormControl type="text" placeholder="Item title" ref={ ref => this.titleInput = ref } autoFocus/>
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
                        <Button className="well" type="submit">Create</Button>
                    </Col>
                </FormGroup>
            </Form>
        );
    }
}
