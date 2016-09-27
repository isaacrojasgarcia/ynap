import { combineReducers } from 'redux';
import list from './itemsListReducer';
import addItemFormStatus from './addItemReducer';

export default combineReducers({
    list,
    addItemFormStatus
});
