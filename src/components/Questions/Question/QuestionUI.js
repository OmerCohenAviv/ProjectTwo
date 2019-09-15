import React, { Fragment } from 'react';

import { Card, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';


const questionUI = (props) => {
    const { userName, question } = props

    return (
        <Fragment>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.avatar} />
                <Card.Body>
                    <Card.Title> Asked By - {userName} </Card.Title>
                    <Card.Text>
                        optionOne - {question.optionOne.text}
                    </Card.Text>
                    <NavLink to={`/questions/${question.id}`}>
                        <Button variant="primary" >Watch Full question</Button>
                    </NavLink>
                </Card.Body>
            </Card>
        </Fragment>

    );
};


export default questionUI;