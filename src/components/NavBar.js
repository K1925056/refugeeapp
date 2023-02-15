import React from 'react';
import { BrowserRouter as Router, Route, Link ,useLocation} from 'react-router-dom';
import './NavBar.css'
import logo from '../assets/logo-noback.png'
import SearchBar from './SearchBar';
const NavBar = () => {
  const location = useLocation();
  return (
    <div>
    <div className="search-container">
    <div className="logo-container">
    <img className="NavLogo" src={logo} alt="" />
    </div>
    <SearchBar />
  </div>
  <nav style={{ position: 'fixed', left: 0, top: '150px', bottom: 0, width: '20%' }}>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
        <li style={{ background: location.pathname === '/' ? '#ddd' : '' }}><Link to="/">Home</Link></li>
        <li style={{ background: location.pathname === '/appointments' ? '#ddd' : '' }}><Link to="/appointments">Appointments</Link></li>
        <li style={{ background: location.pathname === '/people' ? '#ddd' : '' }}><Link to="/people">People</Link></li>
        <li style={{ background: location.pathname === '/your-profile' ? '#ddd' : '' }}><Link to="/your-profile">Your Profile</Link></li>
        <li style={{ background: location.pathname === '/chats' ? '#ddd' : '' }}><Link to="/chats">Chats</Link></li>
        <li style={{ background: location.pathname === '/useful-links' ? '#ddd' : '' }}><Link to="/useful-links">Useful Links</Link></li>
        <h3>Account</h3>
        <li style={{ background: location.pathname === '/settings' ? '#ddd' : '' }}><Link to="/settings">Settings</Link></li>
        <li style={{ background: location.pathname === '/logout' ? '#ddd' : '' }}><Link to="/logout">Logout</Link></li>
      </ul>
    </nav>
    </div>
  );
};

export default NavBar;
