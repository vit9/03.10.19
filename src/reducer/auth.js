import * as types from "../constants/actionTypes";

const initState = {
    responce: [],
    isFetching: false,
  };

export default (state = initState, {type, payload} ) => {
   
    switch(type) {
        case types.USER_AUTH_REQUEST: {
            return {
                ...state,
                isFetching: true,
            }
        }
        case types.USER_AUTH_REQUEST_SUCCESS: {
            
            if (payload.data===null){
                payload.data = false
            }
            else if (payload.data!==null && payload.data.id !==undefined ){
                const { id } = payload.data
                localStorage.setItem("id",JSON.stringify(id))
            }
            return {
                ...state,
                responce: payload.data,
                isFetching: false,        
            }
        }
        case types.USER_AUTH_REQUEST_FAIL: {
            return {
                ...state,
                isFetching: false,
                error: "ERROR",
            }
        }    
        default: return state;
    }
};