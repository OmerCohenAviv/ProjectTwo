import React from 'react';

import {Card,ListGroup,ListGroupItem} from 'react-bootstrap';

const leaderboardUI = (props) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.user.avatarURL} />
            <Card.Body>
                <Card.Title>{props.user.name}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem> Total Score - {props.totalPoints}</ListGroupItem>
                <ListGroupItem> answer Score - {props.answersPoints}</ListGroupItem>
                <ListGroupItem> question Score - {props.questionsPoints}</ListGroupItem>
            </ListGroup>
        </Card>
    );
};


export default leaderboardUI;
