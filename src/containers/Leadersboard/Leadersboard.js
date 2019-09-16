import React, { Component } from 'react';

import { connect } from 'react-redux';
import LeaderboardsUI from '../../components/Leadersboard/LeadersboardUI';

class Leadersboard extends Component {
    render() {
        let allUsers = this.props.allUsers.map(user => {
            const answersPoints = Object.values(user.answers).length
            const questionsPoints = user.questions.length
            const totalPoints = answersPoints + questionsPoints;
            return <LeaderboardsUI  key={user.id} answersPoints={answersPoints} questionsPoints={questionsPoints} totalPoints={totalPoints} user={user} />
        })
        allUsers = allUsers.sort((a , b) => a.props.totalPoints - b.props.totalPoints).reverse()
        console.log(allUsers)
        return (
            <div>
                {allUsers}
            </div>
        );
    };
};

const mapStateToProps = state => {
    return {
        allUsers: state.Home.allUsers
    };
};

export default connect(mapStateToProps)(Leadersboard);