import React from 'react'
import "./HelpRequired.css"
import logo from '../assets/logo-noback.png'
const HelpRequired = () => {
    return (
        <div className="HelpRequired">
            <h2><img className="logo" src={logo} alt=''/></h2>
            <h3>Do you Require Emergency Help?</h3>
            <div>
            <button>Yes</button>
            <button>No</button>
            </div>
          
        </div>
    )
}

export default HelpRequired
