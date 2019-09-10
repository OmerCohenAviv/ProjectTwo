import React from 'react';

const loginUI = (props) => {
    const { allUsers } = props
    let displayUsers = []
    for (let user of allUsers) {
        displayUsers.push(user)
    };
    displayUsers = displayUsers.map(user => {
        return <option key={user.id} value={user.id}> {user.name} </option>
    });

    return (
        <form onSubmit={props.clickedLog}>
            <select value={props.userToBeLogged} onChange={props.changeUser}>
                <option defaultValue hidden>Choose User</option>
                {displayUsers}
            </select>
            <button >Submit</button>
        </form>
    );
};


export default loginUI;