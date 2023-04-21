import React, { useContext } from 'react';
import './Header.css'
import Logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
const Header = () => {
    const {user,logOut} = useContext(AuthContext)
    const handelLogOut=()=>{
       
    }
   
    return (
        <nav className='header'>
            <img src={Logo}></img>
            <div className='ancor'>
                <Link to='/'>shop</Link>
                <Link to='/order'>Order</Link>
                <Link to='/inventory'>Inventory</Link>
                <Link to='/login'>Login</Link>
                <Link to='/signup'>Signup</Link>
                {user && <span>welcome{user.email} <button onClick={handelLogOut}>signout</button> </span> }
               
            </div>
        </nav>
    );
};

export default Header;