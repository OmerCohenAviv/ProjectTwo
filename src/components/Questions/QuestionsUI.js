import React from 'react';

import { Container, Row, Col, Button } from 'react-bootstrap';
import QuestionUI from './Question/QuestionUI';
import AnswerUI from '../Answers/AnswerUI/AnswerUI';

const questionsUI = (props) => {
    console.log(props)
    const unAnsweredQuestions = [];
    const answeredQuestions = [];
    if (!props.showAnswers) {
        props.notAnsweredQuestions.forEach(el => {
            console.log(el)
            const avatar = props.allUsers.filter(user => user.id === el.author)[0].avatarURL
            const userName = props.allUsers.filter(user => user.id === el.author)[0].name
            unAnsweredQuestions.push(
                <Col sm key={el.id}>
                    <QuestionUI
                        avatar={avatar}
                        showFullPollFunc={props.showFullPollFunc}
                        allUsers={props.allUsers}
                        el={el}
                        userName={userName} />
                </Col>
            );
        })
    };
    if (props.showAnswers) {
        props.answeredQuestions.forEach(el => {
            console.log(el)
            const userName = props.allUsers.filter(user => user.id === el.author)[0].name
            const avatar = props.allUsers.filter(user => user.id === el.author)[0].avatarURL
            answeredQuestions.push(
                <Col sm key={el.id}>
                    <AnswerUI
                        avatar={avatar}
                        showFullAnswered={props.showFullAnswered}
                        allUsers={props.allUsers}
                        el={el}
                        userName={userName} />
                </Col>
            );
        })
    }
    return (
        <Container style={{ display: 'flex' }} >
            <Row style={{ display: 'block' }}>
                <Button onClick={props.switchQA} style={{ display: 'block', margin: '0 auto' }}> Questions</Button>
                {unAnsweredQuestions}
            </Row>
            <Row style={{ display: 'block', marginLeft: 'auto' }}>
                <Button onClick={props.switchQA} style={{ display: 'block', margin: '0 auto' }}>answered Questions</Button>
                {answeredQuestions}
            </Row>
        </Container>
    );
};


export default questionsUI;