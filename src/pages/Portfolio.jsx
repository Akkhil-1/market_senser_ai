import React from 'react';
import { 
  PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip, Legend
} from 'recharts';
import { User, Briefcase, TrendingUp, ShieldCheck, CreditCard, DollarSign } from 'lucide-react';

const PORTFOLIO_DATA = [
  { name: 'Stocks', value: 45000, color: '#2563eb' },
  { name: 'Mutual Funds', value: 30000, color: '#8b5cf6' },
  { name: 'Fixed Deposits', value: 15000, color: '#10b981' },
];

const HOLDINGS = {
  stocks: [
    { symbol: 'AAPL', name: 'Apple Inc.', allocation: '15%', value: 15000, return: '+12.4%' },
    { symbol: 'MSFT', name: 'Microsoft Corp.', allocation: '12%', value: 12000, return: '+8.2%' },
    { symbol: 'GOOGL', name: 'Alphabet Inc.', allocation: '10%', value: 10000, return: '+5.1%' },
    { symbol: 'TSLA', name: 'Tesla Inc.', allocation: '8%', value: 8000, return: '-2.4%' },
  ],
  mutualFunds: [
    { name: 'Vanguard 500 Index Fund', type: 'Equity', allocation: '20%', value: 20000, return: '+10.5%' },
    { name: 'Fidelity Blue Chip Growth', type: 'Equity', allocation: '10%', value: 10000, return: '+14.2%' },
  ],
  fds: [
    { target: 'HDFC Bank FD', rate: '7.1% p.a.', maturity: '24 Months', value: 10000 },
    { target: 'SBI Fixed Deposit', rate: '6.8% p.a.', maturity: '12 Months', value: 5000 },
  ]
};

const Portfolio = () => {
  const totalValue = PORTFOLIO_DATA.reduce((acc, item) => acc + item.value, 0);

  return (
    <main className="container fade-in-up" style={{ padding: '2rem 1.5rem', flex: 1 }}>
      <h1 className="hero-title" style={{ fontSize: '2.25rem' }}>Personal Portfolio</h1>
      <p className="hero-subtitle">Manage your wealth, assets, and overall net worth.</p>

      <div className="dashboard portfolio-dashboard">
        
        {/* Left Column: Personal Info & Distribution */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* Profile Card */}
          <div className="card fade-in-left" style={{ textAlign: 'center' }}>
            <div style={{ display: 'inline-flex', padding: '1.5rem', borderRadius: '50%', backgroundColor: '#eff6ff', marginBottom: '1rem' }}>
              <User size={48} color="var(--primary-color)" />
            </div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Alex Mitchell</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Premium Investor</p>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', backgroundColor: '#f8fafc', borderRadius: '0.5rem', textAlign: 'left' }}>
              <div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Net Worth</p>
                <p style={{ fontWeight: 700, fontSize: '1.25rem', color: 'var(--text-main)' }}>${totalValue.toLocaleString()}</p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Overall Return</p>
                <p style={{ fontWeight: 700, fontSize: '1.25rem', color: 'var(--success-color)' }}>+9.4%</p>
              </div>
            </div>
          </div>

          {/* Allocation Chart */}
          <div className="card fade-in-left" style={{ animationDelay: '0.1s', display: 'flex', flexDirection: 'column' }}>
            <div className="card-header">
              <h3 className="card-title">Asset Allocation</h3>
              <Briefcase size={20} color="var(--text-muted)" />
            </div>
            <div style={{ flex: 1, minHeight: '350px', width: '100%', marginTop: '1rem' }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie 
                    data={PORTFOLIO_DATA} 
                    cx="50%" 
                    cy="50%" 
                    innerRadius={60} 
                    outerRadius={80} 
                    paddingAngle={5} 
                    dataKey="value"
                  >
                    {PORTFOLIO_DATA.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <RechartsTooltip formatter={(value) => `$${value.toLocaleString()}`} />
                  <Legend verticalAlign="bottom" wrapperStyle={{ paddingTop: '20px', lineHeight: '24px' }}/>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Right Column: Holdings Lists */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          {/* Stocks */}
          <div className="card fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="card-header">
              <h3 className="card-title" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <TrendingUp size={20} color="#2563eb" /> Stock Holdings
              </h3>
            </div>
            <div className="stock-list">
              {HOLDINGS.stocks.map((stock, i) => (
                <div className="stock-item" style={{ padding: '0.75rem 1rem' }} key={i}>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontWeight: 600 }}>{stock.symbol}</span>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{stock.name}</span>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ fontWeight: 600, display: 'block' }}>${stock.value.toLocaleString()}</span>
                    <span style={{ fontSize: '0.85rem', color: stock.return.startsWith('+') ? 'var(--success-color)' : 'var(--danger-color)' }}>
                      {stock.return}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mutual Funds */}
          <div className="card fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="card-header">
              <h3 className="card-title" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <ShieldCheck size={20} color="#8b5cf6" /> Mutual Funds
              </h3>
            </div>
            <div className="stock-list">
              {HOLDINGS.mutualFunds.map((mf, i) => (
                <div className="stock-item" style={{ padding: '0.75rem 1rem' }} key={i}>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontWeight: 600 }}>{mf.name}</span>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{mf.type} • {mf.allocation}</span>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ fontWeight: 600, display: 'block' }}>${mf.value.toLocaleString()}</span>
                    <span style={{ fontSize: '0.85rem', color:'var(--success-color)' }}>
                      {mf.return}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Fixed Deposits */}
          <div className="card fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="card-header">
              <h3 className="card-title" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <ShieldCheck size={20} color="#10b981" /> Fixed Deposits (FD)
              </h3>
            </div>
            <div className="stock-list">
              {HOLDINGS.fds.map((fd, i) => (
                <div className="stock-item" style={{ padding: '0.75rem 1rem' }} key={i}>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontWeight: 600 }}>{fd.target}</span>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Maturity: {fd.maturity}</span>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ fontWeight: 600, display: 'block' }}>${fd.value.toLocaleString()}</span>
                    <span style={{ fontSize: '0.85rem', color: 'var(--success-color)' }}>
                      {fd.rate}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </main>
  );
};

export default Portfolio;
