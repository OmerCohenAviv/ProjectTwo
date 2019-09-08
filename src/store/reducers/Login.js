import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utility/functions/functions';

const initalState = {   
    allUsers: null,
    loggedUser: null,
    loading: false
};

const LoginReducer = (state = initalState, action) => {
    switch (action.type) {
        case(actionTypes.GET_ALL_USERS_START):   { return updateObject( state, {loading: true} ) }
        case(actionTypes.GET_ALL_USERS_SUCCESS): { return updateObject( state, {loading: false, allUsers: action.users} ) }
        case(actionTypes.GET_ALL_USERS_FAIL):    { return updateObject( state, {loading: false} ) }

        case(actionTypes.LOGIN_USER):    { return updateObject(state,{ loggedUser: action.user} ) }
        default: return state;
    };
};


export default LoginReducer;