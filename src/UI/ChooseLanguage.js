import React from 'react'
import './ChooseLanguage.css'
import Ukraine from '../assets/ukraine.png'
import Poland from '../assets/monaco.png'
import UK from '../assets/united-kingdom.png'
import logo from '../assets/logo-noback.png'
const ChooseLanguage = () => {
    return (
        <div className="language-container">
            <div> <img className="logo" src={logo} alt=''/></div>
            <div>
            <h3>Choose Language</h3>
            </div>
            <div className="languageSelector">
                <div className='langImage'>
                    <img src={Ukraine} alt=''/>
                <h3>Ukranian</h3>
                </div>
                <div className='langImage'>
                <img src={Poland} alt=''/>
                <h3>English</h3>
                </div>
                <div className='langImage'>
                <img src={UK} alt=''/>
                <h3>Polish</h3>
                </div>
            </div>
        </div>
    )
}

export default ChooseLanguage
