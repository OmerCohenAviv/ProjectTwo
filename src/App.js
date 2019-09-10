import React, { Component  } from 'react';
import './App.css';

import { connect } from 'react-redux'
import Login from './containers/User/Login/Login';
import Logout from './containers/User/Logout/Logout'
import Layout from './hoc/Layout/Layout';
import * as actions from './store/actions/index';
import { Route, Switch} from 'react-router-dom'

class  App extends Component  {
  componentDidMount() {
    this.props.onGetAllUsersInit();
  };
  
  render () {
    const routes = (
      <Switch>
        <Route path='/login' component={Login}  exact/>
        <Route path='/logout' component={Logout}  exact/>
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
      onGetAllUsersInit: () => dispatch( actions.onGetAllUsersInit() )
  };
};




export default connect(null, mapDispatchToProps)(App);

