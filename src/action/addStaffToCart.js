import * as types from '../constants/actionTypes';

const axios = require('axios')

const addStaffToCartRequest = payload => ({
    type: types.ADD_STAFF_TO_CART_REQUEST,
    payload
})

const addStaffToCartRequestSuccess = payload => ({
    type: types.ADD_STAFF_TO_CART_REQUEST_SUCCESS,
    payload
})

const addStaffToCartRequestFail = payload => ({
    type: types.ADD_STAFF_TO_CART_REQUEST_FAIL,
    payload
})

export const AddNewStaffAction = payload => {
    
    return dispatch => {
        dispatch(addStaffToCartRequest())
        axios.post(`http://127.0.0.1:2000/api/staffs`, payload)
            .then(res =>
                setTimeout(() => dispatch(addStaffToCartRequestSuccess(res)), 1000))
            .catch(err =>
                dispatch(addStaffToCartRequestFail(err)))
    }
}
