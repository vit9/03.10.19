import * as types from '../constants/actionTypes';

const axios = require('axios')

const addNewStaffRequest = payload => ({
    type: types.ADD_NEW_STAFF_REQUEST,
    payload
})

const addNewStaffRequestSuccess = payload => ({
    type: types.ADD_NEW_STAFF_REQUEST_SUCCESS,
    payload
})

const addNewStaffRequestFail = payload => ({
    type: types.ADD_NEW_STAFF_REQUEST_FAIL,
    payload
})

export const createStaff = payload => {
    return dispatch => {
        dispatch(addNewStaffRequest())
        axios.post(`http://127.0.0.1:2000/api/staffs`, payload)
            .then(res =>
                setTimeout(() => dispatch(addNewStaffRequestSuccess(res)), 1000))
            .catch(err =>
                dispatch(addNewStaffRequestFail(err)))
    }
}
