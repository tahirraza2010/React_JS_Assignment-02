import React, { useState } from 'react';
// import './App.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">realme</div>

      {/* Toggle Button */}
      <button className="menu-toggle" onClick={toggleMenu}>
        {isMenuOpen ? '✖' : '☰'}
      </button>

      {/* Navigation Links */}
      <ul className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
        <li><a href="#">realme smartphone</a></li>
        <li><a href="#">narzo smartphone</a></li>
        <li><a href="#">Audio</a></li>
        <li><a href="#">Accessories</a></li>
        <li><a href="#">Brand</a></li>
        <li><a href="#">Support</a></li>
        <li><a href="#">Community</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
