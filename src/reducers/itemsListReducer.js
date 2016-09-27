import _ from 'lodash';

const initialState = {
    items: [],
    sorted: false,
    sortedBy: ''
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

        case 'REMOVE_ITEM':
            return Object.assign({}, state, {
                items: _.remove(state.items, (it) => {
                    return it.id !== action.payload;
                })
            });

        case 'SORT_ITEMS': {
            return Object.assign({}, state, {
                items: _.sortBy(state.items, [action.payload]),
                sorted: true,
                sortedBy: action.payload
            });
        }
    }
    return state;
};
