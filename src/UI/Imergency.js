import React from 'react'
import './Imegency.css'
import aid from '../assets/aid.png'
import logo from '../assets/logo-noback.png'
const Imergency = () => {
    return (
        <div className="HelpRequired">
        <h2><img className="logo" src={logo} alt=''/></h2>
        <div>
        <h3>Help is on the way !</h3>
</div>
        <div className="ImergencyLabel">
        <h3>Always remeber if your life or health is in dangeer CALL 112</h3>
        <img src={aid} alt="" />
        </div>
      
    </div>
    )
}

export default Imergency
