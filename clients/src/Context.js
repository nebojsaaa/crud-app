import React, { useState, useEffect, createContext } from 'react';
import { userService } from './services/api';

export const UsersContext = createContext();

export const UsersProvider = (props) => {

    const [ data, setData ] = useState([]);

    useEffect(() => {
		userService.getData(setData);
    }, []);

    
    
    const state = {
        data
    }

    return (
        <UsersContext.Provider value={state}>
            {props.children}
        </UsersContext.Provider>
    )
}