import React, { Component } from 'react';

import QuestionsUI from '../../components/Questions/QuestionsUI';
import * as actions from '../../store/actions/index';
import FullQuestion from '../../components/Questions/FullQuestion/FullQuestion';
import { connect } from 'react-redux';


class Home extends Component {
    state = {
        showAnswers: false,
        showFullPoll: false,
        questionShowed: '',
        chooseOption: '',
        submitAnswer: false,
    };
    componentDidUpdate() {
        if (this.state.submitAnswer && !this.props.loading) {
            const userToBeLogged = this.props.allUsers.filter(user => {
                return user.id === this.props.loggedUser.id
            });
            this.props.onLoginUser(...userToBeLogged, this.props.allQuestions)
            this.setState({ submitAnswer: false })
        }
    };

    showAnswersHandler = () => {
        this.setState(prevState => ({ showAnswers: !prevState.showAnswers }))
    };
    showFullPollHandler = (questionID) => {
        if (!this.state.showFullPoll) {
            this.setState({ showFullPoll: true, questionShowed: questionID })
        };
    };
    cancelFullPollHandler = () => {
        this.setState({ showFullPoll: false, questionID: '' })
    };
    chooseOptionHandler = (option) => {
        console.log(typeof (option))
        this.setState({ chooseOption: option })
    };

    saveQuestionHandler = (qID) => {
        const questionInfo = {
            authedUser: this.props.loggedUser.id,
            qid: qID,
            answer: this.state.chooseOption
        };
        this.props.onSaveAnswerInit(questionInfo)
        this.props.onSetAllUsersInit()
        this.props.onSetAllQuestions()
        this.setState({ submitAnswer: true, showFullPoll: false })
    };


    render() {
        let allQuestions = <p>Please Log in First</p>
        if (this.props.notAnsweredQuestions && this.props.loggedUser) {
            allQuestions = <QuestionsUI
                showFullPoll={this.showFullPollHandler}
                showAnswers={this.state.showAnswers}
                clickedAnswers={this.showAnswersHandler}
                allUsers={this.props.allUsers}
                answeredQuestions={this.props.answeredQuestions}
                notAnsweredQuestions={this.props.notAnsweredQuestions}
                user={this.props.loggedUser}
            />
        };
        if (this.state.showFullPoll) {
            allQuestions = (
                <FullQuestion
                    submitAnswer={this.state.submitAnswer}
                    chooseOption={this.chooseOptionHandler}
                    saveQuestion={this.saveQuestionHandler}
                    allUsers={this.props.allUsers}
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
        loading: state.Home.loading,
        allQuestions: state.Home.allQuestions,
        allUsers: state.Home.allUsers,
        answeredQuestions: state.User.answeredQuestions,
        notAnsweredQuestions: state.User.notAnsweredQuestions,
        loggedUser: state.User.loggedUser,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLoginUser: (user, allQuestions) => dispatch(actions.logInUserInit(user, allQuestions)),
        onSetAllUsersInit: () => dispatch(actions.setAllUsersInit()),
        onSetAllQuestions: () => dispatch(actions.setAllUsersQuestionsInit()),
        onSaveAnswerInit: (questionInfo) => dispatch(actions.saveQuestionInit(questionInfo))
    };
};



export default connect(mapStateToProps, mapDispatchToProps)(Home);