import * as types from "../constants/actionTypes";

const axios = require("axios");

const getUserRequestById = payload => ({
    type: types.GET_USER_REQUEST_BY_ID,
    payload
})

const getUserRequestSuccessById = payload => ({
    type: types.GET_USER_REQUEST_SUCCESS_BY_ID,
    payload
})

const getUserRequestFailById = payload => ({
    type: types.GET_USER_REQUEST_FAIL_BY_ID,
    payload
})

export const getUser = (payload) => {
    return dispatch => {
        dispatch(getUserRequestById());
        return axios.get(`http://127.0.0.1:2000/api/users?id=${payload}`)
            .then(res => {
                setTimeout(() => dispatch(getUserRequestSuccessById(res)), 250)
            })
            .catch(err => {
                dispatch(getUserRequestFailById(err));
            })
    }
}

export const deleteStaffById = (payload) => ({
	type:types.DELETE_STAFF,
	payload
})
export const removeUser = payload =>({
    type:types.REMOVE_USER,
    payload
})