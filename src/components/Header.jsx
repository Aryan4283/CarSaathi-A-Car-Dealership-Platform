// In client/src/components/Header.jsx
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <img src="/images/logo/logo.png" alt="CarSaathi Logo" className="logo-img" />
          CarSaathi
        </Link>
        <nav className="main-nav">
          <ul>
            <li><NavLink to="/inventory">Inventory</NavLink></li>
            <li><NavLink to="/sell-my-car">Sell / Trade</NavLink></li>
            <li><NavLink to="/about">About Us</NavLink></li>
          </ul>
        </nav>
        <div className="auth-buttons">
          <Link to="/login" className="btn btn-secondary">Sign In</Link>
          <Link to="/register" className="btn btn-primary">Sign Up</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;