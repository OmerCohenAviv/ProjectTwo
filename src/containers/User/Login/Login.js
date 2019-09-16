import React, { Component } from 'react';

import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import LoginUI from '../../../components/User/Login/LoginUI';
import * as actions from '../../../store/actions/index';
import { Spinner } from 'react-bootstrap'


class Login extends Component {
    state = { 
        user: ''
    };

    selectUserHandler = (event) => {
        this.setState({ user: event.target.value })
    };
    onLoginHandler = (event) => {
        event.preventDefault();
        let userToBeLogged = this.props.allUsers.filter(user => {
            return user.id === this.state.user
        });
        userToBeLogged = userToBeLogged[0]
        this.props.onLoginUser(userToBeLogged.id, this.props.allQuestions, this.props.allUsers)
    };

    render() {
        let displayLogin =  <Spinner animation="border" />
        if (this.props.allUsers) {
            displayLogin = (
                <LoginUI
                    changeUser={this.selectUserHandler}
                    userToBeLogged={this.state.user}
                    clickedLog={this.onLoginHandler}
                    allUsers={this.props.allUsers} />
            );
        };
        if (this.props.loggedUser) { displayLogin = <Redirect to='/' /> }

        return <div> {displayLogin} </div> 
    };
};


const mapStateToProps = state => {
    return {
        allQuestions: state.Home.allQuestions,
        allUsers: state.Home.allUsers,
        loggedUser: state.User.loggedUser !== null
    };
};

const mapDispatchToProps = dispatch => {
    return { onLoginUser: (user, allQuestions, allUsers) => dispatch(actions.logInUserInit(user, allQuestions, allUsers)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);