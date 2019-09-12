import React, { Fragment } from 'react';

import { Navbar, Nav, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import { NavLink } from 'react-router-dom';

const toolbar = (props) => {
    let logStatus = (
        <Nav.Item >
            <NavLink to='/login'>
                <Button variant="outline-success" >Login</Button>
            </NavLink>
        </Nav.Item>
    );
    let displayItems = (
        <Nav className="mr-auto">
            <Nav.Item>
                <NavLink to='/' className="nav-link" activeClassName='nav-link active' exact>
                    Home
                     </NavLink>
            </Nav.Item>
        </Nav>
    );
    if (props.userStatus) {
        logStatus = (
            <Fragment>
                <Nav.Item >
                    <NavLink to='/logout'>
                        <Button variant="outline-danger" >Logout</Button>
                    </NavLink>
                </Nav.Item>
                <Nav.Item style={{ marginLeft: '7px' }} >
                    <NavLink to='/'>
                        <Button variant="primary" >{props.userStatus.name}</Button>
                    </NavLink>
                </Nav.Item>
            </Fragment>
        );
        displayItems = (
            <Nav className="mr-auto">
                <Nav.Item>
                    <NavLink to='/' className="nav-link" activeClassName='nav-link active' exact>
                        Home
                     </NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink to='/newquestion' className="nav-link" activeClassName='nav-link active' exact>
                        New Question
                     </NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink to='/leadersboard' className="nav-link" activeClassName='nav-link active' exact>
                        Leaders Board
                     </NavLink>
                </Nav.Item>
            </Nav>
        );
    };

    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand> <FontAwesomeIcon icon={faQuestionCircle} color='orange' /> </Navbar.Brand>
            {displayItems}
            {logStatus}
        </Navbar>
    );
};


export default toolbar;