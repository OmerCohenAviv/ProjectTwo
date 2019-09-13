import React, { Fragment } from 'react';

import {Nav, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const logStatus = (props) => {
    let logStat = (
        <Nav.Item >
            <NavLink to='/login'>
                <Button variant="outline-success" >Login</Button>
            </NavLink>
        </Nav.Item>
    );
    if (props.name) {
        logStat = (
            <Fragment>
                <Nav.Item >
                    <NavLink to='/logout'>
                        <Button variant="outline-danger" >Logout</Button>
                    </NavLink>
                </Nav.Item>
                <Nav.Item style={{ marginLeft: '7px' }} >
                    <NavLink to='/'>
                        <Button variant="primary" >{props.name}</Button>
                    </NavLink>
                </Nav.Item>
            </Fragment>
        );
    };
    return logStat


};

export default logStatus;