import React,{ Fragment } from 'react';
import Login from '../../../containers/User/Login/Login'

import {Card, Button} from 'react-bootstrap'
import { Route } from 'react-router-dom';

const questionUI = (props) => {
    const { userName, question} = props
    
    return (
        <Fragment>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.avatar} />
            <Card.Body>
                <Card.Title> Asked By - {userName} </Card.Title>
                <Card.Text>
                    optionOne - {question.optionOne.text}
                  </Card.Text>
                <Button variant="primary" onClick={() => props.showFullPollFunc(question)} >Watch Full Poll</Button>
            </Card.Body>
        </Card>
        <Route path='/check' component={Login} exact />
        </Fragment>

    );
};


export default questionUI;