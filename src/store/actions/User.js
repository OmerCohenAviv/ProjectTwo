
import * as actionTypes from './actionTypes';



export const logInUserInit = (userID, allQuestions, allUsers, token) => {
    let user = allUsers.filter((userObj) => {
        return userObj.id === userID
    })
    user = user[0]
    return { type: actionTypes.LOGIN_USER, user: user, allQuestions: allQuestions, token: token }
};
export const logOutUserInit = () => {
    return { type: actionTypes.LOGOUT_USER }
};
export const autoLoginInit = (allQuestions, allUsers) => {
    return dispatch => {
        const token = localStorage.getItem('token')
        if (token) {
            dispatch(logInUserInit(token, allQuestions, allUsers, token))
        }
        else dispatch(logOutUserInit())
    };
};

