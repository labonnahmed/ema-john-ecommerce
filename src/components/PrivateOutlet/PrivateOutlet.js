import React from 'react';
import { useContext } from 'react';
import {Navigate, Outlet} from 'react-router-dom';
import { userContext } from '../../App';

const PrivateOutlet = () => {
    const[authUser] = useContext(userContext);
    return (
        <>
            {authUser ? <Outlet /> : <Navigate to='/login' />}
        </>
    );
};

export default PrivateOutlet;