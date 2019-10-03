import * as types from "../constants/actionTypes";

const initState = {
    user: [],
    isFetching: false,
    error: null,
    del: "",
    remove: null
    
  };

export default (state = initState, {type, payload} ) => { 
    switch(type) {
        case types.GET_USER_REQUEST_BY_ID: {
            return {
                ...state,
                isFetching: true
            }
        }
        case types.GET_USER_REQUEST_SUCCESS_BY_ID: {
            
            return {
                ...state,
                user: payload.data,
                isFetching: false,
                del: ""
            }
        }
        case types.GET_USER_REQUEST_FAIL_BY_ID: {
            return {
                ...state,
                isFetching: false,
                error: "ERROR"
            }
        }
       
        case types.DELETE_STAFF: {
            return {
            ...state,
            isFetching: false,
            error: "ERROR",
            del: payload
            }
        }
        case types.REMOVE_USER: {
            return {
            ...state,
            remove: payload
            }
        }
        
        default: return state;

    }
};