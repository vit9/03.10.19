import * as types from "../constants/actionTypes";

const initState = {
    responce: [],
    isFetching: false,
    error: null,
  };

  export default (state = initState, { type, payload }) => {
    
      switch (type) {
        case types.USER_REG_REQUEST: {
          return {
          ...state,
          isFetching: true
          }
        }

        case types.USER_REG_REQUEST_SUCCESS: {
            
          return {
            ...state,
            isFetching: false,
            responce: payload,
            showModal: true
          }
        }

        case types.USER_REG_REQUEST_FAIL: {
          return {
            ...state,
            isFetching: false,
            error: "ERROR"
          }
        }
        default: return state;    
    }
  };