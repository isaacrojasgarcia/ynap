import React from 'react';

export default class ListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false
        };
    }

    renderItem() {
        const { id, title, price } = this.props;
        if (this.state.isEditing) {
            return (
                <td>
                    <form onSubmit={ this.onSaveClick.bind(this) }>
                        <input type="text" defaultValue={title} ref="editInput" />
                    </form>
                </td>
            );
        }

        return (
            <td> { title } </td>
        );
    }

    render() {
        return (
            <tr>
                <td> { this.props.id } </td>
                { this.renderItem() }
                <td> { this.props.price } </td>
            </tr>
        );
    }
}
