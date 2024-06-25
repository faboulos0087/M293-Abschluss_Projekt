// src/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="title">My Application</h1>
      <nav>
        <ul>
          <li>
            <Link to="/calendar" className="nav-link">Calendar</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
