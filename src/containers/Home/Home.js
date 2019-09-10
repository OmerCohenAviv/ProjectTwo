import React, { Component } from 'react';

import QuestionsUI from '../../components/Questions/QuestionsUI';
import { connect } from 'react-redux';


class Home extends Component {

    render() {
        console.log(this.props.notAnsweredQuestions)
        let allQuestions = <p>Please Log in</p>
        if (this.props.notAnsweredQuestions && this.props.userStatus) {
            allQuestions = <QuestionsUI
                allUsers={this.props.allUsers}
                answeredQuestions={this.props.answeredQuestions}
                notAnsweredQuestions={this.props.notAnsweredQuestions}
                user={this.props.userStatus}
            />
        };
        return (
            <div>
                {allQuestions}
            </div>
        );
    };
};

const mapStateToProps = state => {
    return {
        answeredQuestions: state.User.answeredQuestions,
        notAnsweredQuestions: state.User.notAnsweredQuestions,
        allUsers: state.User.allUsers,
        userStatus: state.User.loggedUser,
    };
};



export default connect(mapStateToProps)(Home);