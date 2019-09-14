import * as dataAPI from '../../DataBase';
import * as actionTypes from './actionTypes';


//Getting All Questions.
const setAllUsersQuestionsStart = () => {
    return { type: actionTypes.SET_ALL_USERS_QUESTIONS_START }
};
const setAllUsersQuestionsSuccess = (questions) => {
    return { type: actionTypes.SET_ALL_USERS_QUESTIONS_SUCCESS, questions: questions }
};
const setAllUsersQuestionsFail = () => {
    return { type: actionTypes.SET_ALL_USERS_QUESTIONS_FAIL }
};
export const setAllUsersQuestionsInit = () => {
    return dispatch => {
        dispatch(setAllUsersQuestionsStart())
        dataAPI._getQuestions()
            .then(questions => dispatch(setAllUsersQuestionsSuccess(questions)))
            .catch(error => dispatch(setAllUsersQuestionsFail(error)))
    };
};


//Getting All Users.
const getAllUsersStart = () => {
    return { type: actionTypes.GET_ALL_USERS_START };
};
const getAllUsersSuccess = (users) => {
    const usersArr = Object.values(users);
    return { type: actionTypes.GET_ALL_USERS_SUCCESS, users: usersArr };
};
const getAllUsersFail = () => {
    return { type: actionTypes.GET_ALL_USERS_FAIL };
};
export const setAllUsersInit = () => {
    return dispatch => {
        dispatch(getAllUsersStart())
        dataAPI._getUsers()
            .then(users => dispatch(getAllUsersSuccess(users)))
            .catch(error => dispatch(getAllUsersFail(error)))
    };
};
//Answering Question
const saveQuestionAnswerStart = () => {
    return { type: actionTypes.SAVE_QUESTION_ANSWER_START }
};
const saveQuestionAnswerSuccess = () => {
    return { type: actionTypes.SAVE_QUESTION_ANSWER_SUCCESS }
};
const saveQuestionAnswerFail = () => {
    return { type: actionTypes.SAVE_QUESTION_ANSWER_FAIL }
};
export const saveQuestionInit = ({ authedUser, qid, answer }) => {
    return dispatch => {
        dispatch(saveQuestionAnswerStart())
        dataAPI._saveQuestionAnswer({ authedUser, qid, answer })
            .then(response => dispatch(saveQuestionAnswerSuccess()))
            .catch(error => dispatch(saveQuestionAnswerFail(error)))
    };
};
