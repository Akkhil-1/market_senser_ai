import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Shield, Cpu, Zap } from 'lucide-react';

const About = () => {
  return (
    <main className="container fade-in-up" style={{ paddingTop: '3rem', paddingBottom: '4rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', marginBottom: '4rem' }}>
        <h1 className="hero-title" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Democratizing Wall Street</h1>
        <p className="hero-subtitle" style={{ fontSize: '1.25rem' }}>
          Our mission is to level the playing field by giving every individual investor access to the same institutional-grade AI prediction models used by top hedge funds. We envision a future driven by transparency and data.
        </p>
      </div>

      <div className="dashboard" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '2rem', marginBottom: '4rem' }}>
        <div className="card fade-in-left" style={{ animationDelay: '0.1s' }}>
          <div style={{ backgroundColor: '#eff6ff', padding: '1rem', borderRadius: '0.75rem', display: 'inline-block', marginBottom: '1rem' }}>
            <Cpu size={24} color="var(--primary-color)" />
          </div>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>Advanced Neural Networks</h3>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>
            Our core engine uses state-of-the-art transformer models trained on petabytes of historical market data, sentiment analysis traces, and global macroeconomic indicators.
          </p>
        </div>

        <div className="card fade-in-left" style={{ animationDelay: '0.2s' }}>
          <div style={{ backgroundColor: '#eff6ff', padding: '1rem', borderRadius: '0.75rem', display: 'inline-block', marginBottom: '1rem' }}>
            <Target size={24} color="var(--primary-color)" />
          </div>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>High Precision Rates</h3>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>
            Achieving over 87% directional pattern matching accuracy on the S&P 500 spanning a timeframe of 1-3 days, validated continuously via high-volume backtests.
          </p>
        </div>

        <div className="card fade-in-left" style={{ animationDelay: '0.3s' }}>
          <div style={{ backgroundColor: '#eff6ff', padding: '1rem', borderRadius: '0.75rem', display: 'inline-block', marginBottom: '1rem' }}>
            <Zap size={24} color="var(--primary-color)" />
          </div>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>Real-time Analysis</h3>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>
            Our distributed models re-evaluate market dynamics under latency-sensitive streams, identifying market edge and alpha instantly as global events unfold.
          </p>
        </div>

        <div className="card fade-in-left" style={{ animationDelay: '0.4s' }}>
          <div style={{ backgroundColor: '#eff6ff', padding: '1rem', borderRadius: '0.75rem', display: 'inline-block', marginBottom: '1rem' }}>
            <Shield size={24} color="var(--primary-color)" />
          </div>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>Trust & Transparency</h3>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>
            We strictly provide directional confidence scores tailored to your risk tolerance. Say goodbye to opaque black-box market guarantees.
          </p>
        </div>
      </div>
      
      <div className="card" style={{ textAlign: 'center', padding: '4rem 2rem', backgroundColor: '#1e3a8a', color: 'white', borderRadius: '1rem' }}>
        <h2 style={{ fontSize: '2.25rem', fontWeight: 700, marginBottom: '1rem', color: 'white' }}>Ready to optimize your portfolio?</h2>
        <p style={{ fontSize: '1.1rem', marginBottom: '2.5rem', opacity: 0.9 }}>Join thousands of traders using MarketSenser AI for a smarter edge.</p>
        <Link to="/signup" className="btn" style={{ backgroundColor: 'white', color: '#1e3a8a', fontSize: '1.125rem', padding: '0.75rem 2.5rem', fontWeight: 600, borderRadius: '2rem', textDecoration: 'none', display: 'inline-block' }}>
          Create Free Account
        </Link>
      </div>
    </main>
  );
};

export default About;
