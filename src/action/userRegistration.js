import * as types from "../constants/actionTypes";

const axios = require("axios");

const userRegRequest = payload => ({
    type: types.USER_REG_REQUEST,
    payload
});

const userRegRequestSuccess = payload => ({
    type: types.USER_REG_REQUEST_SUCCESS,
    payload
});

const userRegRequestFail = payload => ({
    type: types.USER_REG_REQUEST_FAIL,
    payload
});

export const userRegistration = (payload) => {
    return dispatch => {
        dispatch(userRegRequest());
        return axios.post(`http://127.0.0.1:2000/api/users`, payload)
            .then(res => {
                setTimeout(() => {
                    dispatch(userRegRequestSuccess(res))
                }, 1000);
            })
            .catch(err => {
                dispatch(userRegRequestFail(err));
            })
    };
};