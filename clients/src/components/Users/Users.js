import React, { useContext  } from 'react';
import { UsersContext } from '../../Context';
import User from '../User/User';
import './Users.scss';

const Users = () => {

	const users = useContext(UsersContext);

    return (
        <div className="user-list">
            <h1 className="user-list__title">All Users</h1>
            {users.data && users.data.map((user, i) => {
                return (
                        <User 
                            key={user.id}
                            user={user}
                        />
                )
            })}
        </div>
    );
}

export default Users;
