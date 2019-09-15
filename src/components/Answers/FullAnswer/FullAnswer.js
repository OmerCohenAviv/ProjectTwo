import React,{ Fragment } from 'react';

import { ProgressBar } from 'react-bootstrap'
import { Card, ListGroup, CardGroup, Button} from 'react-bootstrap';

const fullAnswer = (props) => {
    console.log(props)
    const { question, user } = props;
    const questionKeyId = Object.values({ ...question.id }).join('');
    const { [questionKeyId]: questionID } = user.answers;
    const pickedQuestion = questionID;
    const numberOfVotes = question.optionOne.votes.length + question.optionTwo.votes.length;
    const progressPrecent = numberOfVotes * 100;
    const optionOnePrecent = ((question.optionOne.votes.length * 100) / progressPrecent * 100).toFixed();
    const optionTwoPrecent = ((question.optionTwo.votes.length * 100) / progressPrecent * 100).toFixed();
    let displayCard = (
        <CardGroup>
            <Card style={{ width: '18rem' }} bg="success" text="white" >
                <Card.Header>Option One - {question.optionOne.text}</Card.Header>
                <ListGroup variant="flush" style={{color:'black'}}>
                    <ListGroup.Item>Number of people voted for this - {question.optionOne.votes.length} out of {numberOfVotes}</ListGroup.Item>
                    <ListGroup.Item> <ProgressBar now={optionOnePrecent} label={`${optionOnePrecent}%`} /> </ListGroup.Item>
                </ListGroup>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Header>Option Two - {question.optionTwo.text}</Card.Header>
                <ListGroup variant="success" >
                    <ListGroup.Item>Number of people voted for this - {question.optionTwo.votes.length} out of {numberOfVotes}  </ListGroup.Item>
                    <ListGroup.Item><ProgressBar now={optionTwoPrecent} label={`${optionTwoPrecent}%`} /></ListGroup.Item>
                </ListGroup>
            </Card>
        </CardGroup>
    );


    if (pickedQuestion === 'optionTwo') {
        displayCard = (
            <CardGroup>
                <Card style={{ width: '18rem' }} >
                    <Card.Header>Option One - {question.optionOne.text}</Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Number of people voted for this - {question.optionOne.votes.length} out of {numberOfVotes}</ListGroup.Item>
                        <ListGroup.Item> <ProgressBar now={optionOnePrecent} label={`${optionOnePrecent}%`} /> </ListGroup.Item>
                    </ListGroup>
                </Card>
                <Card style={{ width: '18rem' }} bg="success" text="white">
                    <Card.Header>Option Two - {question.optionTwo.text}</Card.Header>
                    <ListGroup variant="flush" style={{color:'black'}}>
                        <ListGroup.Item>Number of people voted for this - {question.optionTwo.votes.length} out of {numberOfVotes}  </ListGroup.Item>
                        <ListGroup.Item><ProgressBar now={optionTwoPrecent} label={`${optionTwoPrecent}%`} /></ListGroup.Item>
                    </ListGroup>
                </Card>
            </CardGroup>
        );
    };

    return (
        <Fragment>
            {displayCard}
            <Button variant='danger'  onClick={ () => props.history.push('/') } >GoBack</Button>
        </Fragment>
    );
};


export default fullAnswer;