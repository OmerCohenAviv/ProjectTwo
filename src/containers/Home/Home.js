import React, { Component } from 'react';


import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
import { Spinner } from 'react-bootstrap'
import UtilityRenderHome from './HomeUtility/Render'


class Home extends Component {
    state = {
        showAnswers: false,
        submitAnswer: false,
        chooseOption: '',
        allQuestions: null,
        allUsers: null,
        questionAnswered: null
    };
    componentDidMount() {
        if (this.props.allQuestions) {
            const allQuestionsCopy = [...this.props.allQuestions]
            const allUsersCopy = [...this.props.allUsers]
            this.setState({ allQuestions: allQuestionsCopy, allUsers: allUsersCopy})
        };  
    };
    componentDidUpdate() {
        if ( this.state.allQuestions) {
            if ((JSON.stringify(this.state.allQuestions) !== JSON.stringify(this.props.allQuestions) )) {
                console.log('hey')
                const allQuestionsCopy = [...this.props.allQuestions]
                this.setState({ allQuestions: allQuestionsCopy })
                let userToBeLogged = this.props.allUsers.filter(user => {
                    return user.id === this.props.loggedUser.id
                });
                userToBeLogged = userToBeLogged[0]
                this.setState({ allQuestions: allQuestionsCopy }, () => {
                    this.props.onLoginUser(userToBeLogged.id, this.props.allQuestions, this.props.allUsers)
                })
            }
        }
       if ((this.state.submitAnswer && !this.props.loading)) {
            let userToBeLogged = this.props.allUsers.filter(user => {
                return user.id === this.props.loggedUser.id
            });
            userToBeLogged = userToBeLogged[0]
            this.props.onLoginUser(userToBeLogged.id, this.props.allQuestions, this.props.allUsers)
            this.setState({ submitAnswer: false }, () => {
                this.props.history.push(`/questions/${this.state.questionAnswered}`)
            })
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
        this.setState({ submitAnswer: true,  questionAnswered: qID })
    };

    render() {
        let homeUI = <p>Please Log In </p>
        if (this.props.loading) {
            homeUI = <Spinner animation="border" role="status" />
        }
        if (this.props.loggedUser && !this.props.loading) {
            homeUI = (
                <UtilityRenderHome
                    user={this.props.loggedUser}
                    submitAnswer={this.state.submitAnswer}
                    allUsers={this.props.allUsers}
                    showAnswers={this.state.showAnswers}
                    answeredQuestions={this.props.answeredQuestions}
                    notAnsweredQuestions={this.props.notAnsweredQuestions}
                    chooseOption={this.chooseOptionHandler}
                    saveQuestion={this.saveQuestionHandler}
                    switchQA={this.showAnswersHandler} />
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
        onLoginUser: (user, allQuestions, userID) => dispatch(actions.logInUserInit(user, allQuestions, userID)),
        onSetAllUsersInit: () => dispatch(actions.setAllUsersInit()),
        onSetAllQuestions: () => dispatch(actions.setAllUsersQuestionsInit()),
        onSaveAnswerInit: (questionInfo) => dispatch(actions.saveQuestionInit(questionInfo))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);