import * as types from '../constants/actionTypes';

const initState = {
    staffResponce: null,
    isFetching: false,
    error: null,
}

export default ( state = initState, { type, payload } ) => {
    switch (type){
        case types.ADD_STAFF_TO_CART_REQUEST: {
            return {
                ...state,
                isFetching: true,
            }
        }
        case types.ADD_STAFF_TO_CART_REQUEST_SUCCESS: {
            return {
                ...state,
                staffResponce: payload,
                isFetching:false,
                error: null
            }
        }
        case types.ADD_STAFF_TO_CART_REQUEST_FAIL: {
            return {
                ...state,
                isFetching: false,
                error: "error",
            }
        }
         default: return state;
    }
}