import React from 'react';

import { Card, Button } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'

const fullQuestion = (props) => {

    console.log(props)
    const { question } = props
    const userName = props.allUsers.filter(user => user.id === question.author)[0].name
    const userAvatar= props.allUsers.filter(user => user.id === question.author)[0].avatarURL
    let fullQuestion = (
        <Card bg='info' text='white' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={userAvatar} />
            <Card.Body>
                <Card.Title> Asked By - {userName} </Card.Title>
                <Card.Text as='div'>
                    <p>Would you rather</p>
                    <hr/>
                    <Button
                        style={{ color: 'white' }}
                        variant='outline-warning'
                        onClick={() => props.chooseOption('optionOne')}>
                        option One - {question.optionOne.text}
                    </Button>
                    <hr />
                    <Button
                        variant='outline-warning'
                        style={{ color: 'white' }}
                        onClick={() => props.chooseOption('optionTwo')}>
                        option Two - {question.optionTwo.text}
                    </Button>
                </Card.Text>
                <hr />
                <Button variant="primary" onClick={() => props.saveQuestion(question.id)} > Submit</Button>
                <Button variant="danger"  onClick={ () => props.history.push('/') }  >Cancel</Button>
            </Card.Body>
        </Card>
    );
    if (props.submitAnswer) {
        fullQuestion = <div> <Redirect to='/' /> </div>
    }
    return (
        <div>
            {fullQuestion}
        </div>
    );
};


export default fullQuestion;