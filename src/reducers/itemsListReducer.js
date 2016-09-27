const initialState = {
    items: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ALL_ITEMS':
            return Object.assign({}, state, {
                items: action.payload
            });

        // case 'ADD_ITEM':
        //     state.items.push(action.data);
        //     return Object.assign({}, state, {
        //         items: state.items
        //     });;

    }

    return state;
};
