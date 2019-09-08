import React, { Component } from 'react';

import { connect } from 'react-redux'
import LoginUI from '../../components/Login/LoginUI';
import * as actions from '../../store/actions/index';


class Login extends Component {
    state = {
        user: ''
    };
    selectUserHandler = (event) => {
        console.log(event.target.value)
        this.setState({ user: event.target.value })
    };
    onLoginHandler = (event) => {
        event.preventDefault();
        const userToBeLogged = this.props.allUsers.filter(user => {
            return user.id === this.state.user
        });
        this.props.onLoginUser(userToBeLogged)
    };
    render() {
        let displayLogin = (
            <p>Spinner....</p>
        );
        if (this.props.allUsers) {
            displayLogin = (
                <LoginUI
                    changeUser={this.selectUserHandler}
                    userToBeLogged={this.state.user}
                    clickedLog={this.onLoginHandler}
                    allUsers={this.props.allUsers} />
            );
        };
        return (
            <div>
                {displayLogin}
            </div>
        );
    };
};


const mapStateToProps = state => {
    return {
        loading: state.Login.loading,
        allUsers: state.Login.allUsers
    };
};
const mapDispatchToProps = dispatch => {
    return {
        onLoginUser: (user) => dispatch(actions.loginUserInit(user))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);