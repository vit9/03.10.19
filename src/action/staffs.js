import * as types from "../constants/actionTypes";

const axios = require('axios');


const staffRequest = payload => ({
	type: types.STAFF_REQUEST,
	payload
});

const staffRequestSuccess = payload => ({
	type: types.STAFF_REQUEST_SUCCESS,
	payload
});

const staffRequestFail = payload => ({
	type: types.STAFF_REQUEST_FAIL,
	payload
});

export const getStaffs = () => {
	return dispatch => {
		dispatch(staffRequest());
		return axios.get(`http://127.0.0.1:2000/api/staffs`)
			.then(res => {
				setTimeout(() => { dispatch(staffRequestSuccess(res)) }, 1000);
			})
			.catch(err => {
				dispatch(staffRequestFail(err));
			})
	};
};