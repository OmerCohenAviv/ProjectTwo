import React, { Component } from 'react';

import {Route} from 'react-router-dom';
import { connect } from 'react-redux';
import FullQuestion from '../../components/Questions/FullQuestion/FullQuestion';
import FullAnswer from '../../components/Answers/FullAnswer/FullAnswer';

class Polls extends Component {
    render() {
        const routesAnswer = this.props.answeredQuestions.map(answered => {
           return <Route 
            path={`/questions/${answered.id}`} 
            render={(props) => <FullAnswer />} />
        })
        const routesQuestions = this.props.unAnsweredQuestions.map(unAnswered => {
           return <Route 
            path={`/questions/${unAnswered.id}`}
            render={(props) => <FullQuestion />} />
        })
        const routes = routesAnswer.concat(routesQuestions)
        return (
            <div>
                {routes}
            </div>
        );
    };
};




const mapStateToProps = state => {
    return {
        user: state.User.loggedUser,
        answeredQuestions: state.User.answeredQuestions,
        unAnsweredQuestions: state.User.unAnsweredQuestions
    };
};

export default connect(mapStateToProps)(Polls)