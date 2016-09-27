const initialState = {
    items: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_ITEMS_FULFILLED':
            return Object.assign({}, state, {
                items: action.payload
            });

        case 'FETCH_FAKE_ITEMS':
            return Object.assign({}, state, {
                items: action.payload
            });

        case 'ADD_ITEM':
            return Object.assign({}, state, {
                items: state.items.concat(action.payload)
            });
    }
    return state;
};
