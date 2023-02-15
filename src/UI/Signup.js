import React from 'react'
import './Signup.css'
import logo from '../assets/logo-noback.png'
const Signup = () => {
    return (
        <div className="SignupPage">
         
            <form className="SignupForm">
            <h3><img className="logoform" src={logo} alt=''/></h3>
            <h3>Create Account</h3>
            <label>Name</label>
            <input type='text' placeholder='Ola boluwatife'/>
            <label>Email</label>
            <input type='text' placeholder='Olaboluwatofezzy@ymail.com'/>
            <label>Password</label>
            <input type='password' placeholder="QWERTY1234"/>
            <div className="termsConditins">
            <input id="checkBox" className='ckeckbox' type='checkbox' placeholder=""/>
            <label htmlFor="checkbox">I accept the <u>Terms & Conditions</u></label>
             </div>
             <button>Sing Up</button>
            </form>
         
        </div>
    )
}

export default Signup
