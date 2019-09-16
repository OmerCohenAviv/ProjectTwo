import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utility/functions/functions';

const initalState = {
    notAnsweredQuestions: [],
    answeredQuestions: [],
    loggedUser: null,
    loading: false,
    token: null
};

const UserReducer = (state = initalState, action) => {
    switch (action.type) {
        //Loggin and filtering answeredQuestions and not answered Questions
        case (actionTypes.LOGIN_USER): {
            const answered = Object.keys(action.user.answers)
            const answeredQuestions = action.allQuestions.filter(q => answered.includes(q.id))
            const notAnsweredQuestions = action.allQuestions.filter(q => !answered.includes(q.id))
            localStorage.setItem('token', action.user.id);
            return updateObject(state, { loggedUser: action.user, notAnsweredQuestions: notAnsweredQuestions, answeredQuestions: answeredQuestions, token:action.token })
        }
        //Logging out.
        case (actionTypes.LOGOUT_USER): {
            localStorage.removeItem('token')
            return updateObject(state, { loggedUser: null }) 
        }
        default: return state;
    };
};


export default UserReducer;