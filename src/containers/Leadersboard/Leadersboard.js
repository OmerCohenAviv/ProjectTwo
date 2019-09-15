import React, { Component } from 'react';

import { connect } from 'react-redux';

class Leadersboard extends Component {
    render() {
        return (
            <div></div>
        );
    };
};

const mapStateToProps = state => {
    return {
        loggedUser: state.User.loggedUser
    };
};

export default connect(mapStateToProps)(Leadersboard);