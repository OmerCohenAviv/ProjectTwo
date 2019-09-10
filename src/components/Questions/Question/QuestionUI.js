import React from 'react';

import {Card, Button} from 'react-bootstrap'

const questionUI = (props) => {
    const { userName, question} = props
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title> Asked By - {userName} </Card.Title>
                <Card.Text>
                    optionOne - {question.optionOne.text}
                  </Card.Text>
                <Button variant="primary" >Watch Full Poll</Button>
            </Card.Body>
        </Card>
    );
};


export default questionUI