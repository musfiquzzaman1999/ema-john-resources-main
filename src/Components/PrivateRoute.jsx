import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    if(loading){
        return <div><h3>loading......</h3></div>
    }
    if(user){
      return children
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;