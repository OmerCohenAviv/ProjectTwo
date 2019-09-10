import React from 'react';

import { Container, Row, Col, Button } from 'react-bootstrap';
import QuestionUI from './Question/QuestionUI';

const questionsUI = (props) => {
    const unAnsweredQuestions = [];
    const answeredQuestions = [];
    for (let question of props.notAnsweredQuestions) {
        const userName = props.allUsers.filter(user => user.id === question.author)[0].name
        unAnsweredQuestions.push(
            <Col sm key={question.id}> <QuestionUI allUsers={props.allUsers} question={question} userName={userName} /> </Col>
        );
    };
    for (let question of props.answeredQuestions) {
        const userName = props.allUsers.filter(user => user.id === question.author)[0].name
        answeredQuestions.push(
            <Col sm key={question.id}> <QuestionUI allUsers={props.allUsers} question={question} userName={userName} /> </Col>
        );

    };
    return (
        <Container style={{ display: 'flex' }} >
            <Row style={{ display: 'block' }}>
                <Col sm style={{ marginBottom: '10px' }}><Button>unAnswered Questions</Button></Col>
                {unAnsweredQuestions}
            </Row>
            <Row style={{ display: 'block' }}>
                <Col sm style={{ marginBottom: '10px' }}><Button>answered Questions</Button></Col>
                {answeredQuestions}
            </Row>
        </Container>
    );
};


export default questionsUI;