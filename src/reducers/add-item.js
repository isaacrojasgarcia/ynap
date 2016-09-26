const addItem = (state = {}, action) => {
    console.log('add item actions', action.type);
    switch (action.type) {
        case 'ADD_ITEM':
            // Add item to the list
            return true;

        default:
            return state
    }
}

export default addItem;
