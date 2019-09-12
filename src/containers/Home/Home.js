import React, { Component } from 'react';

import QuestionsUI from '../../components/Questions/QuestionsUI';
import FullQuestion from '../../components/Questions/FullQuestion/FullQuestion';
import { connect } from 'react-redux';


class Home extends Component {
    state = {
        showAnswers: false,
        showFullPoll: false,
        questionShowed: ''
    };

    showAnswersHandler = () => {
        this.setState(prevState => ({ showAnswers: !prevState.showAnswers }))
    };
    showFullPollHandler = (questionID) => {
        if (!this.state.showFullPoll) {
            console.log('clicked')
            this.setState({ showFullPoll: true, questionShowed: questionID })
        };
    };
    cancelFullPollHandler = () => {
        this.setState({ showFullPoll: false, questionID: '' })
    }


    render() {
        let allQuestions = <p>Please Log in First</p>
        if (this.props.notAnsweredQuestions && this.props.userStatus) {
            allQuestions = <QuestionsUI
                showFullPoll={this.showFullPollHandler}
                showAnswers={this.state.showAnswers}
                clickedAnswers={this.showAnswersHandler}
                allUsers={this.props.allUsers}
                answeredQuestions={this.props.answeredQuestions}
                notAnsweredQuestions={this.props.notAnsweredQuestions}
                user={this.props.userStatus}
            />
        };
        if (this.state.showFullPoll) {
            allQuestions = (
                <FullQuestion
                    allUsers = {this.props.allUsers}
                    cancelFullPoll={this.cancelFullPollHandler}
                    question={this.state.questionShowed} />
            );
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