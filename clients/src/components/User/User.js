import React from 'react';
import './User.scss';

const User = ({ user, index }) => {

    return (
        <div className="user">
            <span className="user__text">Name: {user.name}</span>
            <span className="user__text">Username: {user.username}</span>
            <span className="user__text">Email: {user.email}</span>
        </div>
    );
}

export default User;
