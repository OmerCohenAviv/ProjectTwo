import React, { Component  } from 'react';
import './App.css';

import { connect } from 'react-redux'
import Login from './containers/Login/Login';
import * as actions from './store/actions/index';

class  App extends Component  {
  componentDidMount() {
    this.props.onGetAllUsersInit();
  };
  
  render () {
    return (
      <div className="App">
      <Login />
    </div>
    );
  };
};

const mapDispatchToProps = dispatch => {
  return {
      onGetAllUsersInit: () => dispatch( actions.onGetAllUsersInit() )
  };
};




export default connect(null, mapDispatchToProps)(App);

