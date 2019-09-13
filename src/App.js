import React, { Component  } from 'react';
import './App.css';

import { connect } from 'react-redux'
import Login from './containers/User/Login/Login';
import Logout from './containers/User/Logout/Logout'
import Home from './containers/Home/Home';
import Layout from './hoc/Layout/Layout';
import Leadersboard from './containers/Leadersboard/Leadersboard';
import * as actions from './store/actions/index';
import { Route, Switch} from 'react-router-dom'


class  App extends Component  {
  componentDidMount() {
    this.props.onGetAllUsersInit()
    this.props.onSetAllQuestions()
  };
  
  render () {
    const routes = (
      <Switch>
        <Route path='/login' component={Login}  exact/>
        <Route path='/logout' component={Logout}  exact/>
        <Route path='/leadersboard' component={Leadersboard} exact />
        <Route path='/' component={Home} exact />
      </Switch>
    );
    return (
      <Layout>
        {routes}
      </Layout>
    );
  };
};

const mapDispatchToProps = dispatch => {
  return {
      onGetAllUsersInit: () => dispatch( actions.setAllUsersInit() ),
      onSetAllQuestions: () => dispatch(actions.setAllUsersQuestionsInit())
  };
};




export default connect(null, mapDispatchToProps)(App);

