import React from 'react'
import logo from '../assets/logo-noback.png'
const Info = () => {
    return (
        <div className="HelpRequired">
        <h2><img className="logo" src={logo} alt=''/></h2>
        <div>
        <h3>Tell us your Name, Phone numer 
and information about your location</h3>
        <h4>Vika, +380 745 664 532, Costa Next to train station</h4>
</div>
        <div>
        <button>Next</button>
        
        </div>
      
    </div>
    )
}

export default Info
