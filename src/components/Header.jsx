import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Activity, Search, Bell, Menu, X } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="header">
      <div className="container header-content">
        <Link to="/" className="logo" style={{ textDecoration: 'none' }} onClick={closeMenu}>
          <Activity size={28} />
          <span>MarketSenser AI</span>
        </Link>

        {/* Mobile Menu Toggle */}
        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle navigation menu">
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation Links */}
        <nav className={`nav-links ${isMenuOpen ? 'mobile-open' : ''}`}>
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} onClick={closeMenu}>Dashboard</Link>
          <Link to="/portfolio" className={`nav-link ${location.pathname === '/portfolio' ? 'active' : ''}`} onClick={closeMenu}>Portfolio</Link>
          <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} onClick={closeMenu}>About</Link>
          <a href="#" className="nav-link" onClick={closeMenu}>Predictions</a>
        </nav>
        
        {/* Right Side Header Actions */}
        <div className={`header-actions ${isMenuOpen ? 'mobile-open' : ''}`}>
          <Search size={22} color="var(--text-muted)" style={{ cursor: 'pointer' }} className="hide-on-mobile" />
          <Bell size={22} color="var(--text-muted)" style={{ cursor: 'pointer' }} className="hide-on-mobile" />
          <Link to="/signin" className="btn btn-primary" style={{ textDecoration: 'none' }} onClick={closeMenu}>Sign In</Link>
        </div>

      </div>
    </header>
  );
};

export default Header;
