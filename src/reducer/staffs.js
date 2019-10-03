import * as types from "../constants/actionTypes";

const initState = {
    staffs: [],
    isFetching: false,
    error: null
};

export default (state = initState, { type, payload }) => {
    switch (type) {
        case types.STAFF_REQUEST: {
            return {
                ...state,
                isFetching: true
            }
        }
        case types.STAFF_REQUEST_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                staffs: payload.data.reverse()
            }
        }
        case types.STAFF_REQUEST_FAIL: {
            return {
                ...state,
                isFetching: false,
                error: "ERROR"
            }
        }
     
        default: return state;
    }
};  