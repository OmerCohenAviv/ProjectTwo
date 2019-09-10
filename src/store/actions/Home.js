import * as dataAPI from '../../DataBase';
import * as actionTypes from './actionTypes';



const setAllUsersQuestionsStart = () => {
    return {type: actionTypes.SET_ALL_USERS_QUESTIONS_START}
};
const setAllUsersQuestionsSuccess = (questions) => {
    return {type: actionTypes.SET_ALL_USERS_QUESTIONS_SUCCESS, questions: questions}
};
const setAllUsersQuestionsFail = () => {
    return {type: actionTypes.SET_ALL_USERS_QUESTIONS_FAIL}
};

export const  setAllUsersQuestionsInit = ()  => {
    return dispatch => {
        dispatch( setAllUsersQuestionsStart() )
        dataAPI._getQuestions()
        .then(questions => dispatch( setAllUsersQuestionsSuccess(questions) ) )
        .catch(error => dispatch(setAllUsersQuestionsFail(error) ) )
    };
};