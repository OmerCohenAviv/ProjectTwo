import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utility/functions/functions';

const initalState = {
    allQuestions: null,
    loading: false
};

const HomeReducer = (state = initalState, action) => {
    switch (action.type) {
        case(actionTypes.SET_ALL_USERS_QUESTIONS_START): { return  updateObject(state, {loading: true}) }

        case(actionTypes.SET_ALL_USERS_QUESTIONS_SUCCESS): { return updateObject(state, {allQuestions: Object.values(action.questions), loading: false})}

        case(actionTypes.SET_ALL_USERS_QUESTIONS_FAIL) : { return updateObject(state, {loading: false})}

        default: return state;
    };
};

export default HomeReducer;