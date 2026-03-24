import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Mail, MessageSquare, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundColor: 'var(--card-bg)', borderTop: '1px solid var(--border-color)', marginTop: 'auto', padding: '3rem 0 2rem' }}>
      <div className="container">
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '2rem' }}>
          <div style={{ maxWidth: '300px' }}>
            <Link to="/" className="logo" style={{ textDecoration: 'none', marginBottom: '1rem', display: 'inline-flex' }}>
              <Activity size={28} />
              <span>MarketSenser AI</span>
            </Link>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
              Institutional-grade artificial intelligence predictions and market intelligence, designed to be accessible for everyone.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Mail size={20} color="var(--text-muted)" style={{ cursor: 'pointer' }} />
              <MessageSquare size={20} color="var(--text-muted)" style={{ cursor: 'pointer' }} />
              <Globe size={20} color="var(--text-muted)" style={{ cursor: 'pointer' }} />
            </div>
          </div>
          
          <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap' }}>
            <div>
              <h4 style={{ fontWeight: 600, marginBottom: '1rem', color: 'var(--text-main)' }}>Platform</h4>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li><Link to="/" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>Dashboard</Link></li>
                <li><Link to="/about" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>About Us</Link></li>
                <li><a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontWeight: 600, marginBottom: '1rem', color: 'var(--text-main)' }}>Legal</h4>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li><a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>Privacy Policy</a></li>
                <li><a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>Terms of Service</a></li>
                <li><a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>Disclaimer</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid var(--border-color)', marginTop: '2.5rem', paddingTop: '2rem', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
          &copy; {new Date().getFullYear()} MarketSenser AI. All rights reserved. Designed for predictive modeling.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
