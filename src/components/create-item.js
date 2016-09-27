// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Button, Form, FormGroup, FormControl, Col, ControlLabel, Alert } from 'react-bootstrap';
//
// export default class CreateItemComponent extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             error: null,
//             errorMsg: ''
//         };
//
//     }
//
//     renderError() {
//         if (!this.state.errorMsg) { return null; }
//         return (
//             <FormGroup>
//                 <Col smOffset={2} sm={10}>
//                     <Alert bsStyle="danger" onDismiss={ this.handleAlertDismiss.bind(this) }>
//                         { this.state.errorMsg }
//                     </Alert>
//                 </Col>
//             </FormGroup>
//         );
//     }
//
//     render() {
//         return (
//             <Form horizontal>
//                 <FormGroup bsSize="large" validationState={ this.state.error }>
//                     <Col componentClass={ControlLabel} sm={2}>Title</Col>
//                     <Col sm={10}>
//                         <FormControl type="text" placeholder="Item title" ref={ ref => this.titleInput = ref }/>
//                     </Col>
//                 </FormGroup>
//                 <FormGroup bsSize="large">
//                     <Col componentClass={ControlLabel} sm={2}>Price</Col>
//                     <Col sm={10}>
//                         <FormControl type="text" placeholder="Item price" ref={ ref => this.priceInput = ref }/>
//                     </Col>
//                 </FormGroup>
//                 <FormGroup>
//                     <Col smOffset={2} sm={10}>
//                         <Button className="well" onClick={ this.handleCreate.bind(this) }>Create</Button>
//                     </Col>
//                 </FormGroup>
//                 { this.renderError() }
//             </Form>
//         );
//     }
//
//     handleCreate(event) {
//         event.preventDefault();
//
//         const titleInput = ReactDOM.findDOMNode(this.titleInput).value;
//         const priceInput = ReactDOM.findDOMNode(this.priceInput).value;
//         const validateInput = this.validateInput(titleInput);
//
//         if (validateInput) {
//             this.setState({ error: 'error', errorMsg: validateInput });
//             return;
//         }
//
//         const { store } = this.context;
//         this.setState({ error: 'success', errorMsg: null });
//         store.dispatch({ type: 'ADD_ITEM' });
//
//         ReactDOM.findDOMNode(this.titleInput).value = '';
//         ReactDOM.findDOMNode(this.priceInput).value = '';
//     }
//
//     validateInput(t) {
//         if (!t) {
//             return 'Please enter a title for the item';
//         }
//         else if (_.find(this.props.items, item => item.title === t)) {
//             return 'Item already exists';
//         }
//         else {
//             return null;
//         }
//     }
//
//     handleAlertDismiss() {
//         this.setState({ error: 'success', errorMsg: null });
//         ReactDOM.findDOMNode(this.titleInput).focus();
//     }
// }
