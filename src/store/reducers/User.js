import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utility/functions/functions';

const initalState = {
    notAnsweredQuestions: [],
    answeredQuestions: [],
    loggedUser: null,
    loading: false
};

const UserReducer = (state = initalState, action) => {
    switch (action.type) {
        //Loggin and filtering answeredQuestions and not answered Questions
        case (actionTypes.LOGIN_USER): {
            const answered = Object.keys(action.user.answers)
            const answeredQuestions = action.allQuestions.filter(q => answered.includes(q.id))
            const notAnsweredQuestions = action.allQuestions.filter(q => !answered.includes(q.id))
            return updateObject(state, { loggedUser: action.user, notAnsweredQuestions: notAnsweredQuestions, answeredQuestions: answeredQuestions })
        }
        //Logging out.
        case (actionTypes.LOGOUT_USER): { 
            return updateObject(state, { loggedUser: null }) 
        }

        default: return state;
    };
};


export default UserReducer;