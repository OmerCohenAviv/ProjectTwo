import React from 'react';

import QuestionsUI from '../../../components/Questions/QuestionsUI';
import FullQuestion from '../../../components/Questions/FullQuestion/FullQuestion';
import FullAnswer from '../../../components/Answers/FullAnswer/FullAnswer';
import { Spinner } from 'react-bootstrap';
import { Route } from 'react-router-dom';

const UtilityRenderHome = (props) => {
    let allQuestions = ''
    //Showing all questions/Answers
    if (props.notAnsweredQuestions && props.user) {
        allQuestions = <Route
            path='/'
            exact
            render={(routeProps) => <QuestionsUI
                {...props}
                {...routeProps}
                showFullAnswered={props.showFullAnswered}
                showFullPollFunc={props.showFullPollFunc}
                showAnswers={props.showAnswers}
                switchQA={props.switchQA}
                allUsers={props.allUsers}
                answeredQuestions={props.answeredQuestions}
                notAnsweredQuestions={props.notAnsweredQuestions}
                user={props.user}
            />
            }
        />
    }
  //Routes for showing a clicked  Question
    const fullQuestions = props.notAnsweredQuestions.map(question => {
        return <Route
            exact
            key={question.id}
            path={`/questions/${question.id}`}
            render={(routeProps) => <FullQuestion
                {...props}
                {...routeProps}
                user={props.user}
                submitAnswer={props.submitAnswer}
                chooseOption={props.chooseOption}
                saveQuestion={props.saveQuestion}
                allUsers={props.allUsers}
                cancelFullPoll={props.cancelFullPoll}
                question={props.questionShowed}
            />
            }
        />
    });
    //Routes for showing a clicked answered Question
    const fullAnswers = props.answeredQuestions.map(answer => {
        return <Route
            exact
            key={answer.id}
            path={`/questions/${answer.id}`}
            render={(routeProps) => <FullAnswer
                {...props}
                {...routeProps}
                canceled={props.cancelFullAnswer}
                user={props.user}
                question={answer}
            />
            }
        />
    });
    console.log(fullAnswers)
    //Spinner if loading is true.
    if (props.loading) {
        allQuestions = <Spinner animation="border" role="status" />
    };
    return (
        <div>
            {allQuestions}
            {fullQuestions}
            {fullAnswers}
        </div>
    );

};

export default UtilityRenderHome;