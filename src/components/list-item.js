import React from 'react';
import { connect } from 'react-redux';
import { Button, Glyphicon } from 'react-bootstrap';
import { removeItem } from '../actions';

@connect()
export default class ListItem extends React.Component {
    handleRemove() {
        this.props.dispatch(removeItem(this.props.id));
    }

    render() {
        return (
            <tr>
                <td> { this.props.id } </td>
                <td> { this.props.title } </td>
                <td> { this.props.price } </td>
                <td>
                    <Button class="btn btn-link" onClick={ this.handleRemove.bind(this, this.props.id) }>
                        <Glyphicon glyph="minus" class="text-danger" />  <span class="text-danger">Remove</span>
                    </Button>
                </td>
            </tr>
        );
    }
}
