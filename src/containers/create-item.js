import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, FormControl, Col, ControlLabel, Alert } from 'react-bootstrap';
import { addItem } from '../actions';

let CreateItem = ({ dispatch }) => {
    let titleInput, priceInput;

    let handleCreate = (e) => {
        e.preventDefault();
        const title = ReactDOM.findDOMNode(titleInput);
        const price = ReactDOM.findDOMNode(priceInput);
        dispatch(addItem(title.value, price.value));
        title.value = '';
        price.value = '';
        title.focus();
    }

    return (
        <Form horizontal>
            <FormGroup bsSize="large">
                <Col componentClass={ControlLabel} sm={2}>Title</Col>
                <Col sm={10}>
                    <FormControl type="text" placeholder="Item title" ref={ ref => titleInput = ref }/>
                </Col>
            </FormGroup>
            <FormGroup bsSize="large">
                <Col componentClass={ControlLabel} sm={2}>Price</Col>
                <Col sm={10}>
                    <FormControl type="text" placeholder="Item price" ref={ ref => priceInput = ref }/>
                </Col>
            </FormGroup>
            <FormGroup>
                <Col smOffset={2} sm={10}>
                    <Button className="well" onClick={ handleCreate }>Create</Button>
                </Col>
            </FormGroup>
        </Form>
    );
}

CreateItem = connect()(CreateItem);
export default CreateItem;
