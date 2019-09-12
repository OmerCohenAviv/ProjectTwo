import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utility/functions/functions';

const initalState = {
    allUsers: null,
    allQuestions: null,
    loading: false
};

const HomeReducer = (state = initalState, action) => {
    switch (action.type) {
        case (actionTypes.SET_ALL_USERS_QUESTIONS_START): { return    updateObject(state, { loading: true }) }
        case (actionTypes.SET_ALL_USERS_QUESTIONS_SUCCESS): { return  updateObject(state, { allQuestions: Object.values(action.questions), loading: false }) }
        case (actionTypes.SET_ALL_USERS_QUESTIONS_FAIL): { return     updateObject(state, { loading: false }) }

        case (actionTypes.GET_ALL_USERS_START): { return   updateObject(state, { loading: true }) }
        case (actionTypes.GET_ALL_USERS_SUCCESS): { return updateObject(state, { allUsers: action.users }) }
        case (actionTypes.GET_ALL_USERS_FAIL): { return    updateObject(state, { loading: false }) }

        case (actionTypes.SAVE_QUESTION_ANSWER_START): {   return (updateObject(state, {loading: true})) }
        default: return state;
    };
};

export default HomeReducer;