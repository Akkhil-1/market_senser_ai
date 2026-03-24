import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Mail, Lock, User } from 'lucide-react';

const SignUp = () => {
  return (
    <main className="container fade-in-up" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1, padding: '4rem 1.5rem' }}>
      <div className="card auth-card">
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
          <div style={{ backgroundColor: '#eff6ff', padding: '1rem', borderRadius: '50%' }}>
            <Activity size={32} color="var(--primary-color)" />
          </div>
        </div>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '0.5rem' }}>Create Account</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Join us to optimize your portfolio.</p>
        
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'left' }} onSubmit={(e) => e.preventDefault()}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, fontSize: '0.9rem' }}>Full Name</label>
            <div style={{ position: 'relative' }}>
              <User size={18} color="var(--text-muted)" style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '1rem' }} />
              <input 
                type="text" 
                placeholder="John Doe"
                style={{ width: '100%', padding: '0.75rem 1rem 0.75rem 2.5rem', borderRadius: '0.5rem', border: '1px solid var(--border-color)', outline: 'none', fontSize: '1rem' }}
              />
            </div>
          </div>
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
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, fontSize: '0.9rem' }}>Password</label>
            <div style={{ position: 'relative' }}>
              <Lock size={18} color="var(--text-muted)" style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '1rem' }} />
              <input 
                type="password" 
                placeholder="Create a strong password"
                style={{ width: '100%', padding: '0.75rem 1rem 0.75rem 2.5rem', borderRadius: '0.5rem', border: '1px solid var(--border-color)', outline: 'none', fontSize: '1rem' }}
              />
            </div>
          </div>
          <button className="btn btn-primary" style={{ width: '100%', padding: '0.875rem', marginTop: '1rem', fontSize: '1rem' }}>
            Create Free Account
          </button>
        </form>
        
        <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
          Already have an account? <Link to="/signin" style={{ color: 'var(--primary-color)', fontWeight: 600, textDecoration: 'none' }}>Sign In</Link>
        </p>
      </div>
    </main>
  );
};

export default SignUp;
