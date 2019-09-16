import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utility/functions/functions';

const initalState = {
    allUsers: null,
    allQuestions: null,
    loading: false
};

const HomeReducer = (state = initalState, action) => {
    switch (action.type) {
        //Getting all Questions
        case (actionTypes.SET_ALL_USERS_QUESTIONS_START): {
            return updateObject(state, { loading: true })
        }
        case (actionTypes.SET_ALL_USERS_QUESTIONS_SUCCESS): {
            const allQuestionsSorted = Object.values(action.questions).sort((a, b) => {
                return a.timestamp - b.timestamp
            });
            return updateObject(state, { allQuestions: allQuestionsSorted.reverse(), loading: false })
        }
        case (actionTypes.SET_ALL_USERS_QUESTIONS_FAIL): {
            return updateObject(state, { loading: false })
        }


        //Getting all Users
        case (actionTypes.GET_ALL_USERS_START): {
            return updateObject(state, { loading: true })
        }
        case (actionTypes.GET_ALL_USERS_SUCCESS): {
            return updateObject(state, { allUsers: action.users })
        }
        case (actionTypes.GET_ALL_USERS_FAIL): {
            return updateObject(state, { loading: false })
        } 


        //Saving new Question
        case (actionTypes.SAVE_QUESTION_ANSWER_START): {
            return updateObject(state, { loading: true })
        }
        case (actionTypes.ADD_QUESTION_START): return (updateObject(state, { loading: true }))
        case (actionTypes.ADD_QUESTION_SUCCESS): {
            const updateAllQuestions = [action.newQuestion, ...state.allQuestions]
            return updateObject(state, { allQuestions: updateAllQuestions, loading: false })
        }
        case (actionTypes.ADD_QUESTION_FAIL): return updateObject(state, { loading: false })

        default: return state;
    };
};

export default HomeReducer;