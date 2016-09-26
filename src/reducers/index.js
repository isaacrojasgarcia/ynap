import _ from 'lodash';
export default (state = {}, action) => {
    console.log('items list', action.type);
    console.log(state, action);
    switch (action.type) {
        case 'GET_ALL_ITEMS':
            return Object.assign({}, state, {
                items: action.items
            });

        case 'ADD_ITEM':
            state.items.push(action.data);
            return Object.assign({}, state, {
                items: state.items
            });;

        default:
            return state
    }
};

// import { combineReducers } from 'redux';
// import itemsList from './items-list';
// import addItem from './add-item';
//
// export default combineReducers({
//     itemsList,
//     addItem
// });
