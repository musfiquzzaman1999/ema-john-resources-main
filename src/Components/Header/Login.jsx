import React, { useContext, useState } from 'react';
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {

    const [error,SetError]= useState('');
    const {logIn}=useContext(AuthContext)
    const navigate = useNavigate();
    const handelLogin=(event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        SetError('')
        logIn(email,password)
        .then((result) => {
            // Signed in 
            const loggedUser = result.user;
            form.reset();
            navigate('/')
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            SetError(errorMessage);
          });
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handelLogin}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type= "password"name="password" id="" required />
                   
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p><small>New to Ema-john? <Link to="/signup">Create New Account</Link></small></p>
            <p>{error}</p>
        </div>
    );
};

export default Login;