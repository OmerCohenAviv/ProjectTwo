import React, { Component } from 'react';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import { connect } from 'react-redux';

class Layout extends Component {
    render() {
        return (
            <div>
                <Toolbar userStatus={this.props.userStatus}/>
                <main style={{marginTop:'32px'}}>
                    {this.props.children }
                </main>
            </div>
        );
    };
};

const mapStateToProps = state => {
    return {
        userStatus: state.User.loggedUser 
    };
};

export default connect(mapStateToProps)(Layout);