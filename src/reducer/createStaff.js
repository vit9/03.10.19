import * as types from '../constants/actionTypes';

const initState = {
    staffData: [],
    isFetching: false,
    error: null,
}

export default ( state = initState, { type, payload } ) => {
    
    switch (type){
        case types.ADD_NEW_STAFF_REQUEST: {
            return {
                ...state,
                isFetching: true,
        
                
            }
        }
        case types.ADD_NEW_STAFF_REQUEST_SUCCESS: {
            return {
                ...state,
                staffData: state.staffData.concat(JSON.parse(payload.config.data)),
                isFetching:false,
                showModal: true,
                error: null
            }
        }
        case types.ADD_NEW_STAFF_REQUEST_FAIL: {
            return {
                ...state,
                isFetching: false,
                error: "error",
                showModal: true
            }
        }
         default: return state;
    }
}