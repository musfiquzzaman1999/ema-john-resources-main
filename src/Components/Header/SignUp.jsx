import React, { useContext, useState } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const SignUp = () => {

    const [error,SetError]= useState('');
    const {createUser} = useContext(AuthContext)
    const handelSignUp =(event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const conform = form.conform.value;
        console.log(email,password,conform)
        SetError('')
        if(password !== conform){
          SetError('password and conform password is not same')
          return
        }
        else if(password.length<6){
            SetError('password must be 6 digits ')
            return
        }
        createUser(email,password)
        .then((result) => {
            // Signed in 
            const loggedUser = result.user;
            // ...
            form.reset()
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            SetError(errorMessage)
            // ..
          });

    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={handelSignUp}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="1" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type= "password"name="password" id="2" required />
                   
                </div>
                <div className="form-control">
                    <label htmlFor="conform">Conform Password</label>
                    <input type= "password"name="conform" id="3" required />
                   
                </div>
                <input className='btn-submit' type="submit" value="Sign Up" />
            </form>
            <p><small>New to Ema-john? <Link to="/login">Already have a account</Link></small></p>
            <p>{error}</p>
        </div>
    );
};

export default SignUp;