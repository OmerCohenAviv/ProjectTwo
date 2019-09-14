import React from 'react';

import QuestionsUI from '../../../components/Questions/QuestionsUI';
import FullQuestion from '../../../components/Questions/FullQuestion/FullQuestion';
import FullAnswer from '../../../components/Answers/FullAnswer/FullAnswer';
import { Spinner } from 'react-bootstrap'

const UtilityRenderHome = (props) => {
    let allQuestions = ''
    //If loaded the unanswerd Questions and User is logged render them.
    if (props.notAnsweredQuestions && props.user) {
        allQuestions = <QuestionsUI
            showFullAnswered={props.showFullAnswered}
            showFullPollFunc={props.showFullPollFunc}
            showAnswers={props.showAnswers}
            switchQA={props.switchQA}
            allUsers={props.allUsers}
            answeredQuestions={props.answeredQuestions}
            notAnsweredQuestions={props.notAnsweredQuestions}
            user={props.user}
        />
    };
    //If showingPoll is true show the FullQuestion
    if (props.showFullPoll) {
        allQuestions = (
            <FullQuestion
                user={props.user}
                submitAnswer={props.submitAnswer}
                chooseOption={props.chooseOption}
                saveQuestion={props.saveQuestion}
                allUsers={props.allUsers}
                cancelFullPoll={props.cancelFullPoll}
                question={props.questionShowed} />
        );
    };
    //Show fullAnswered  if its true
    if (props.showFullAnswer) {
        allQuestions = (
            <FullAnswer
            canceled = {props.cancelFullAnswer}
            user={props.user}
            question={props.answerShowed} />
        );
    };
    //Spinner if loading is true.
    if (props.loading) {
        allQuestions = <Spinner animation="border" role="status" />
    };
    return (
        <div>
            {allQuestions}
        </div>
    );
};


export default UtilityRenderHome;