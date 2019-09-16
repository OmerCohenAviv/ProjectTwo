import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux'
import Login from './containers/User/Login/Login';
import Logout from './containers/User/Logout/Logout'
import Home from './containers/Home/Home';
import Layout from './hoc/Layout/Layout';
import Leadersboard from './containers/Leadersboard/Leadersboard';
import NewQuestion from './containers/NewQuestion/NewQuestion';
import * as actions from './store/actions/index';
import { Route, Switch, Redirect } from 'react-router-dom'


class App extends Component {
  componentDidMount() {
    this.props.onGetAllUsersInit()
    this.props.onSetAllQuestions()
  };
  render() {
    let routes = (
      <Switch>
        <Route path='/login' component={Login} exact />
        <Route path='/' component={Home} exact />
        <Redirect to='/' />
      </Switch>

    )
    if (this.props.loggedUser) {
      routes = (
        <Switch>
          <Route path='/login' component={Login} exact />
          <Route path='/logout' component={Logout} exact />
          <Route path='/leaderboard' component={Leadersboard} exact />
          <Route path='/add' component={NewQuestion} exact />
          <Route path='/questions/:id' component={Home} exact />
          <Route path='/questions/:id' component={NewQuestion} />
          <Route path='/' component={Home} exact />
          <Redirect to='/' />
        </Switch>
      );
    }
    return (
      <Layout>
        {routes}
      </Layout>
    );
  };
};

const mapStateToProps = state => {
  return {
    loggedUser: state.User.loggedUser,
    unAnsweredQuestions: state.User.unAnsweredQuestions,
    answeredQuestions: state.User.answeredQuestions
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onGetAllUsersInit: () => dispatch(actions.setAllUsersInit()),
    onSetAllQuestions: () => dispatch(actions.setAllUsersQuestionsInit())
  };
};




export default connect(mapStateToProps, mapDispatchToProps)(App);

