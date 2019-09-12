import React from 'react';

import { Card, Button } from 'react-bootstrap'

const fullQuestion = (props) => {
    const { question } = props
    const userName = props.allUsers.filter(user => user.id === question.author)[0].name
    return (
        <Card bg='info' text='white' style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title> Asked By - {userName} </Card.Title>
                <Card.Text as='div'>
                    <Button
                        style={{ color: 'white' }}
                        variant='outline-warning'
                        onClick={props.chooseAnswer}>
                        option One - {question.optionOne.text}
                    </Button>
                    <hr />
                    <Button
                        variant='outline-warning'
                        style={{ color: 'white' }}
                        onClick={props.chooseAnswer}>
                        option Two - {question.optionTwo.text}
                    </Button>
                </Card.Text>
                <hr />
                <Button variant="primary" onClick={props.SubmitPoll} >Submit</Button>
                <Button variant="danger" onClick={props.cancelFullPoll} >Cancel</Button>
            </Card.Body>
        </Card>
    );
};


export default fullQuestion;