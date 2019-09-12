import * as dataAPI from '../../DataBase';
import * as actionTypes from './actionTypes';



export const logInUserInit = (user, allQuestions) => {
    return { type: actionTypes.LOGIN_USER, user: user, allQuestions: allQuestions }
};
export const logOutUserInit = () => {
    return { type: actionTypes.LOGOUT_USER }
};



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
            .then(response => dispatch(saveQuestionAnswerSuccess()) )
            .catch(error => dispatch(saveQuestionAnswerFail(error)))
    };
};