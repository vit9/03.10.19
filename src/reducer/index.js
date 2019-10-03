import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';

import userRegistr from './userRegist'
import auth from './auth'
import getUser from './getUser'
import staffs from './staffs'
import addNewStaff from './addNewStaff'
import createStaff from './createStaff'


export default  combineReducers({
    createStaff,
    addNewStaff,
    staffs,
    getUser,
    userRegistr,
    auth,
    form: formReducer
})