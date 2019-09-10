import React from 'react';

import { Navbar, Nav, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import { NavLink } from 'react-router-dom';

const toolbar = (props) => {
    let logStatus = (
        <Nav.Item >
            <NavLink to='/logout'>
                <Button variant="outline-danger" >Logout</Button>
            </NavLink>
        </Nav.Item>
    );
    if (!props.userStatus) {
        logStatus = (
            <Nav.Item >
                <NavLink to='/login'>
                    <Button variant="outline-success" >Login</Button>
                </NavLink>
            </Nav.Item>
        );
    };
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand> <FontAwesomeIcon icon={faQuestionCircle} color='orange' /> </Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/features">New Question</Nav.Link>
                <Nav.Link href="/pricing">Leader Board</Nav.Link>
            </Nav>
            {logStatus}
        </Navbar>
    );
};


export default toolbar;