import React, { Component } from 'react';
import './App.css';

import {Spinner} from 'react-bootstrap'
import { connect } from 'react-redux'
import Login from './containers/User/Login/Login';
import Logout from './containers/User/Logout/Logout'
import Home from './containers/Home/Home';
import Layout from './hoc/Layout/Layout';
import Leadersboard from './containers/Leadersboard/Leadersboard';
import NewQuestion from './containers/NewQuestion/NewQuestion';
import * as actions from './store/actions/index';
import { Route, Switch, } from 'react-router-dom'


class App extends Component {
  componentDidMount() {
      this.props.onGetAllUsersInit()
      this.props.onSetAllQuestions()
      }
  componentDidUpdate() {
    if(!this.props.loggedUser && this.props.allQuestions && this.props.allUsers) {
      this.props.onAutoLogin(this.props.allQuestions,this.props.allUsers)
    }
  }
  render() {
    let routes = (
      <Switch>
        <Route path='/login' component={Login} exact />
        <Route path='/' component={Home} exact />
        <Route render={() => this.props.loading ? <Spinner animation="border" role="status"/> : <h2>Please log in first</h2> } />
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
          <Route path='/' component={Home} exact />
          <Route render={() => this.props.loading ? <Spinner animation="border" role="status"/> :   <h2>404 page not found :( </h2> } />
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
    loading: state.Home.loading,                                                                    
    token: state.User.token,
    loggedUser: state.User.loggedUser,
    allQuestions: state.Home.allQuestions,
    allUsers: state.Home.allUsers,
    unAnsweredQuestions: state.User.unAnsweredQuestions,
    answeredQuestions: state.User.answeredQuestions
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onAutoLogin: (allQuestions,allUsers) => dispatch(actions.autoLoginInit(allQuestions,allUsers)),
    onGetAllUsersInit: () => dispatch(actions.setAllUsersInit()),
    onSetAllQuestions: () => dispatch(actions.setAllUsersQuestionsInit())
  };
};




export default connect(mapStateToProps, mapDispatchToProps)(App);

