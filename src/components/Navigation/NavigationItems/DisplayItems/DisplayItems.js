import React, { Fragment } from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const displayItems = (props) => {
    let display = (
        <Nav className="mr-auto">
            <Nav.Item>
                <NavLink to='/' className="nav-link" activeClassName='nav-link active' exact>
                    Home
                </NavLink>
            </Nav.Item>
        </Nav>
    );
    if (props.user) {
        display = (
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
    }

    return <Fragment>{display}</Fragment>
};


export default displayItems;