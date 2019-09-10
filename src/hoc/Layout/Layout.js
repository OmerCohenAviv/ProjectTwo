import React, { Component } from 'react';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import { connect } from 'react-redux';

class Layout extends Component {
    render() {
        return (
            <div>
                <Toolbar  userStatus={this.props.userStatus}/>
                <main>
                    {this.props.children }
                </main>
            </div>
        );
    };
};

const mapStateToProps = state => {
    return {
        userStatus: state.Login.loggedUser !== null
    };
};

export default connect(mapStateToProps)(Layout);