import React, { Fragment } from 'react';

import { Card, Button, Form } from 'react-bootstrap'

const loginUI = (props) => {
    const { allUsers } = props
    let displayUsers = []
    for (let user of allUsers) {
        displayUsers.push(user)
    };
    displayUsers = displayUsers.map(user => {
        return <option key={user.id} value={user.id}> {user.name} </option>
    });

    return (
        <Fragment>
            <Card style={{ width: '18rem',margin:'0 auto'}}>
                <Card.Body>
                    <Card.Title>Select User</Card.Title>
                        <Form >
                            <select value={props.userToBeLogged} onChange={props.changeUser} >
                                <option defaultValue hidden>Choose User</option>
                                {displayUsers}
                            </select>
                            <Button
                                disabled={props.userToBeLogged === ''}
                                onClick={props.clickedLog}
                                style={{ marginTop: '10px', display: 'flex' }}>
                                Submit
                             </Button>
                        </Form>
                </Card.Body>
            </Card>
        </Fragment>
    );
};


export default loginUI;