import React from 'react';
import { useApp } from '../context/AppContext';
import './Navbar.css';

const Navbar = () => {
  const { searchQuery, setSearchQuery } = useApp();

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/logo.png" alt="Logo" className="logo" />
      </div>
      <div className="navbar-right">
        <input
          type="text"
          className="search-bar"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    </nav>
  );
};

export default Navbar;

