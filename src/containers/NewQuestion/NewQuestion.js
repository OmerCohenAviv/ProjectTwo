import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import NewQuestionUI from '../../components/NewQuestionUI/NewQuestionUI';

class NewQuestion extends Component {
    state = {
        optionOne: {
            value: '',
            rules: {
                required: true
            },
            valid: false,
        },
        optionTwo: {
            value: '',
            rules: {
                required: true
            },
            valid: false,
        },
        validForm: false,
    };
    changeOptionValueHandler = (event, selectedOption) => {
        let validForm = false;
        const selectedOptionUpdated = {
            ...this.state[selectedOption],
            value: event.target.value,
            valid: this.checkValid(event.target.value, this.state[selectedOption].rules)
        };
        this.setState({ [selectedOption]: selectedOptionUpdated }, () => {
            if (this.state.optionOne.valid && this.state.optionTwo.valid) {
                validForm = true;
            }
            this.setState({ validForm: validForm })
        });
    };
    checkValid = (value, rules) => {
        let isValid = true;
        if (rules.required) {
            isValid = value.trim() !== '' && isValid
        };
        return isValid;
    };
    submitFormHandler = (event) => {
        event.preventDefault()
        const questionInfo = {
            optionOneText: this.state.optionOne.value,
            optionTwoText: this.state.optionTwo.value,
            author: this.props.loggedUser.id
        }
        this.props.onAddQuestion(questionInfo)
        this.props.history.push('/')
    };

    render() {

        return (
            <NewQuestionUI
                changed={this.changeOptionValueHandler}
                optionOne={this.state.optionOne.value}
                optionTwo={this.state.optionTwo.value}
                isValid={this.state.validForm}
                submit={this.submitFormHandler} />
        );
    };
};

const mapDispatchToProps = dispatch => {
    return {
    onAddQuestion:  (questionInfo) => dispatch(actions.addQuestionInit(questionInfo) )
    };
};

const mapStateToProps = state => {
    return {
        loggedUser: state.User.loggedUser,
        allQuestions: state.Home.allQuestions
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewQuestion);