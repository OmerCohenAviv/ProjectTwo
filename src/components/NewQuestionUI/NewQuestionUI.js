import React from 'react';

import { Form, Col, Button } from 'react-bootstrap'

const newQuestionUI = (props) => {
    return (
        <Form validated>
            <Form.Row>
                <Col>
                    <Form.Control placeholder="Option One" value={props.optionOne} onChange={(event) => props.changed(event, 'optionOne')} required />
                </Col>
                <Col>
                    <Form.Control placeholder="Option Two" value={props.optionTwo} onChange={(event) => props.changed(event, 'optionTwo')} required />
                </Col>
            </Form.Row>
            <Button
                type="submit"
                disabled={!props.isValid}
                onClick={(event) => props.submit(event)}>
                Submit Question
                 </Button>
        </Form>

    );
};


export default newQuestionUI;