import React, { Component } from 'react';

import * as actions from '../../../store/actions/index';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'


class Logout extends Component {
    componentDidMount() {
        this.props.logoutUser()
    }
    render() {
        return (
            <div><Redirect to='/Login'/></div>
        );
    };
};

const mapDispatchToProps = dispatch => {
    return {
        logoutUser: () => dispatch( actions.logOutUserInit() )
    };
};

export default connect(null,mapDispatchToProps)(Logout);