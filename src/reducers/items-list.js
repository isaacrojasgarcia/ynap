export default (state = {}, action) => {
    switch (action.type) {
        case 'GET_ALL_ITEMS':
            return Object.assign({}, state, {
                items: action.items
            });

        default:
            return state
    }
};
