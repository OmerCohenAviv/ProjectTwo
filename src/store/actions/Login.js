import * as dataAPI from '../../DataBase';
import * as actionTypes from './actionTypes';

const getAllUsersStart = () => {
    return { type: actionTypes.GET_ALL_USERS_START };
};
const getAllUsersSuccess = (users) => {
    const usersArr = Object.values( users );
    return {  type: actionTypes.GET_ALL_USERS_SUCCESS, users: usersArr };   
};
const getAllUsersFail = () => {
    return { type: actionTypes.GET_ALL_USERS_FAIL };
};

export const onGetAllUsersInit = () => {
    return dispatch => {
        dispatch( getAllUsersStart() )
        dataAPI._getUsers()
        .then(users  =>  dispatch(  getAllUsersSuccess(users) ) ) 
        .catch(error =>  dispatch(  getAllUsersFail(error) ) ) 
    };
};


export const loginUserInit = (user) => {
    return {type: actionTypes.LOGIN_USER, user: user}
};

