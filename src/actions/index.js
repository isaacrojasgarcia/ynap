import uuid from 'node-uuid';
import axios from "axios";
import fake from './products';

export function addItem (title, price) {
    return (dispatch) => {
        dispatch({
            type: 'ADD_ITEM',
            payload: {
                id: uuid.v1(),
                title,
                price
            }
        });

        dispatch({
            type: 'ITEM_ADDED',
            payload: true
        });
    };
};

export function getAllItems() {
    return (dispatch) => {
        axios.get('http://localhost:8080/products')
            .then((response) => {
                dispatch({
                    type: 'FETCH_ITEMS_FULFILLED',
                    payload: response.data._embedded.products
                });
            })
            .catch((err) => {
                dispatch({
                    type: 'FETCH_ITEMS_REJECTED',
                    payload: err
                });

                dispatch({
                    type: 'FETCH_FAKE_ITEMS',
                    payload: fake._embedded.products
                });
            })
    }
};

export function itemTitleNotValid() {
    return {
        type: 'ITEM_TITLE_NOT_VALID',
        payload: true
    };
};

export function itemPriceNotValid() {
    return {
        type: 'ITEM_PRICE_NOT_VALID',
        payload: true
    };
};

export function sortBy(sortBy) {
    return {
        type: 'SORT_ITEMS',
        payload: sortBy
    };
}
