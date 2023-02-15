import React from 'react'
import './Signup.css'
import logo from '../assets/logo-noback.png'

const Login = () => {
    return (
        <div className="SignupPage">
         
        <form className="SignupForm">
        <h3><img className="logoform" src={logo} alt=''/></h3>
        <h3>Login</h3>
        <label>Email</label>
        <input type='text' placeholder='Olaboluwatofezzy@ymail.com'/>
        <label>Password</label>
        <input type='password' placeholder="QWERTY1234"/>
         <button>Login</button>
        </form>
     
    </div>
    )
}

export default Login
