import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/" className="logo-link">
          <img src={logo} alt="LIKELION" className="logo-image" />
          <span className="logo-text">LIKELION CJU</span>
        </Link>
      </div>
      <nav className="nav">
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/activity" className="nav-link">Activity</Link>
        <Link to="/members" className="nav-link">Members</Link>
        <Link to="/apply" className="nav-link">Apply</Link>
      </nav>
    </header>
  );
};

export default Header;