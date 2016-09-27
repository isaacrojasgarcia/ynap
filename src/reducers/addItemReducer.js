const initialState = {
    err: false,
    errMsg: ''
};

export default (state = {}, action) => {
    switch (action.type) {
        case 'ITEM_ADDED':
            return {
                ...state,
                err: false,
                errMsg: ''
            };

        case 'ITEM_TITLE_NOT_VALID':
            return {
                ...state,
                err: true,
                errMsg: 'Item title is not valid'
            };

        case 'ITEM_PRICE_NOT_VALID':
            return {
                ...state,
                err: true,
                errMsg: 'Item price is not valid'
            };
    }

    return state;
};
