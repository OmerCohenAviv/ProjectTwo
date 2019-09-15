import React from 'react';

import { Card, Button } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

const answerUI = (props) => {
    const { userName, question } = props
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.avatar} />
            <Card.Body>
                <Card.Title> Asked By - {userName} </Card.Title>
                <Card.Text>
                    optionOne - {question.optionOne.text}
                </Card.Text>
                <NavLink to={`/questions/${question.id}`}>
                    <Button variant="primary" >Watch Full answer INFO</Button>
                </NavLink>
            </Card.Body>
        </Card>
    );
};

export default answerUI;