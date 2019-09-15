import React from 'react';

import { Navbar} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import DisplayItems from '../NavigationItems/DisplayItems/DisplayItems';
import LogStatus from '../NavigationItems/LogStatus/LogStatus';

const toolbar = (props) => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand> <FontAwesomeIcon icon={faQuestionCircle} color='orange' /> </Navbar.Brand>
            <DisplayItems user={props.userStatus} />
            <LogStatus
                name={props.userStatus ? props.userStatus.name : null} />
        </Navbar>
    );
};


export default toolbar;