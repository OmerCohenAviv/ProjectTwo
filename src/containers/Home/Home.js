import React, { Component } from 'react';


import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
import { Spinner } from 'react-bootstrap'
import UtilityRenderHome from './HomeUtility/Render'


class Home extends Component {
    state = {
        showAnswers: false,
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
        };
    };
    //Switch Between Answered Questions/Not answered
    showAnswersHandler = () => {
        this.setState(prevState => ({ showAnswers: !prevState.showAnswers }))
    };
    //Choosing an option inside a poll
    chooseOptionHandler = (option) => {
        this.setState({ chooseOption: option })
    };
    //Submiting the Question 
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
        let homeUI = <p>Please Log In </p>
        if (this.props.loading) {
            homeUI = <Spinner animation="border" role="status" />
        }
        if (this.props.loggedUser && !this.props.loading) {
            homeUI = (
                <UtilityRenderHome
                    user={ this.props.loggedUser }
                    submitAnswer={ this.state.submitAnswer }
                    allUsers={ this.props.allUsers }
                    showAnswers={ this.state.showAnswers }
                    answeredQuestions={ this.props.answeredQuestions }
                    notAnsweredQuestions={ this.props.notAnsweredQuestions } 
                    chooseOption={ this.chooseOptionHandler}
                    saveQuestion={ this.saveQuestionHandler }
                    switchQA={ this.showAnswersHandler  } />
            );
        };

        return <div>{homeUI}</div>
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