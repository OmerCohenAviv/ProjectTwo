import React from 'react';

import {Card, Button} from 'react-bootstrap';

const answerUI = (props) => {
    const { userName, question} = props
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.avatar} />
            <Card.Body>
                <Card.Title> Asked By - {userName} </Card.Title>
                <Card.Text>
                    optionOne - {question.optionOne.text}
                </Card.Text>
                <Button variant="primary" onClick={() => props.showFullAnswered(question)} >Watch Full Poll</Button>
            </Card.Body>
        </Card>
    );
};

export default answerUI;