import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Mail, Lock } from 'lucide-react';

const SignIn = () => {
  return (
    <main className="container fade-in-up" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1, padding: '4rem 1.5rem' }}>
      <div className="card auth-card">
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
          <div style={{ backgroundColor: '#eff6ff', padding: '1rem', borderRadius: '50%' }}>
            <Activity size={32} color="var(--primary-color)" />
          </div>
        </div>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '0.5rem' }}>Welcome Back</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Sign in to access your dashboard.</p>
        
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'left' }} onSubmit={(e) => e.preventDefault()}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, fontSize: '0.9rem' }}>Email Address</label>
            <div style={{ position: 'relative' }}>
              <Mail size={18} color="var(--text-muted)" style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '1rem' }} />
              <input 
                type="email" 
                placeholder="you@example.com"
                style={{ width: '100%', padding: '0.75rem 1rem 0.75rem 2.5rem', borderRadius: '0.5rem', border: '1px solid var(--border-color)', outline: 'none', fontSize: '1rem' }}
              />
            </div>
          </div>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <label style={{ fontWeight: 500, fontSize: '0.9rem' }}>Password</label>
              <a href="#" style={{ color: 'var(--primary-color)', fontSize: '0.85rem', textDecoration: 'none' }}>Forgot password?</a>
            </div>
            <div style={{ position: 'relative' }}>
              <Lock size={18} color="var(--text-muted)" style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '1rem' }} />
              <input 
                type="password" 
                placeholder="••••••••"
                style={{ width: '100%', padding: '0.75rem 1rem 0.75rem 2.5rem', borderRadius: '0.5rem', border: '1px solid var(--border-color)', outline: 'none', fontSize: '1rem' }}
              />
            </div>
          </div>
          <button className="btn btn-primary" style={{ width: '100%', padding: '0.875rem', marginTop: '0.5rem', fontSize: '1rem' }}>
            Sign In
          </button>
        </form>
        
        <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
          Don't have an account? <Link to="/signup" style={{ color: 'var(--primary-color)', fontWeight: 600, textDecoration: 'none' }}>Sign Up</Link>
        </p>
      </div>
    </main>
  );
};

export default SignIn;
