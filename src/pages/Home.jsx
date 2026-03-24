import React, { useState } from 'react';
import { 
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area
} from 'recharts';
import { 
  TrendingUp, TrendingDown, Sparkles, BarChart2 
} from 'lucide-react';

const MOCK_CHART_DATA = [
  { time: '09:30', price: 150.20, predicted: 151.00 },
  { time: '10:00', price: 152.50, predicted: 153.20 },
  { time: '10:30', price: 151.80, predicted: 152.50 },
  { time: '11:00', price: 154.30, predicted: 154.00 },
  { time: '11:30', price: 155.90, predicted: 156.50 },
  { time: '12:00', price: 155.10, predicted: 156.00 },
  { time: '12:30', price: 157.40, predicted: 158.20 },
  { time: '13:00', price: 158.80, predicted: 159.50 },
  { time: '13:30', price: 158.20, predicted: 160.10 },
  { time: '14:00', price: 161.50, predicted: 162.00 },
  { time: '14:30', price: 162.80, predicted: 163.50 },
  { time: '15:00', price: 162.10, predicted: 164.00 },
  { time: '15:30', price: 164.50, predicted: 165.80 },
  { time: '16:00', price: 165.20, predicted: 166.50 },
];

const PREDICTIONS = [
  { symbol: 'AAPL', name: 'Apple Inc.', price: 165.20, change: 2.4, predictedChange: 3.1, trend: 'up' },
  { symbol: 'MSFT', name: 'Microsoft Corp.', price: 342.50, change: 1.2, predictedChange: 1.8, trend: 'up' },
  { symbol: 'TSLA', name: 'Tesla Inc.', price: 210.80, change: -1.5, predictedChange: -0.5, trend: 'down' },
  { symbol: 'NVDA', name: 'NVIDIA Corp.', price: 450.30, change: 4.5, predictedChange: 5.2, trend: 'up' },
  { symbol: 'AMZN', name: 'Amazon.com', price: 135.10, change: -0.8, predictedChange: 0.4, trend: 'up' },
];

const Home = () => {
  const [activeTab, setActiveTab] = useState('1D');

  return (
    <main className="container fade-in-up" style={{ paddingTop: '2rem', paddingBottom: '3rem' }}>
      <h1 className="hero-title">Market Intelligence</h1>
      <p className="hero-subtitle">Institutional-grade AI predictions, designed for everyone.</p>

      <div className="prediction-banner">
        <div className="prediction-content">
          <h3 className="prediction-title">
            <Sparkles size={20} /> AI Market Insight
          </h3>
          <p className="prediction-text">
            Our model indicates strong bullish momentum for Tech sector (XLK) into the afternoon session. Confidence score: 87%
          </p>
        </div>
        <button className="btn btn-primary" style={{ backgroundColor: '#1e3a8a' }}>View Details</button>
      </div>

      <div className="dashboard">
        {/* Main Chart Area */}
        <div className="card">
          <div className="card-header">
            <div>
              <h2 className="card-title">S&P 500 Index Prediction</h2>
              <div style={{ fontSize: '2rem', fontWeight: 700, marginTop: '0.25rem' }}>$4,520.50</div>
              <div className="positive" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontWeight: 500 }}>
                <TrendingUp size={16} /> +1.24% (+55.40)
              </div>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {['1D', '1W', '1M', '3M', '1Y', 'ALL'].map(tab => (
                <button 
                  key={tab}
                  className="btn" 
                  style={{ 
                    backgroundColor: activeTab === tab ? '#eff6ff' : 'transparent',
                    color: activeTab === tab ? 'var(--primary-color)' : 'var(--text-muted)',
                    padding: '0.25rem 0.75rem' 
                  }}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          
          <div style={{ height: '400px', width: '100%', marginTop: '2rem' }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={MOCK_CHART_DATA} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2563eb" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorPredicted" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border-color)" />
                <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fill: 'var(--text-muted)' }} dy={10} />
                <YAxis domain={['dataMin - 2', 'dataMax + 2']} axisLine={false} tickLine={false} tick={{ fill: 'var(--text-muted)' }} dx={-10} orientation="right" />
                <Tooltip 
                  contentStyle={{ borderRadius: '0.5rem', border: 'none', boxShadow: 'var(--shadow-lg)' }}
                  itemStyle={{ fontWeight: 600 }}
                />
                <Area type="monotone" dataKey="price" name="Actual" stroke="#2563eb" strokeWidth={3} fillOpacity={1} fill="url(#colorPrice)" />
                <Area type="monotone" dataKey="predicted" name="AI Prediction" stroke="#8b5cf6" strokeWidth={2} strokeDasharray="5 5" fillOpacity={1} fill="url(#colorPredicted)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Sidebar List */}
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Top AI Signals</h2>
            <BarChart2 size={20} color="var(--text-muted)" />
          </div>
          
          <div className="stock-list">
            {PREDICTIONS.map((stock, idx) => (
              <div 
                className="stock-item fade-in-left" 
                key={stock.symbol}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="stock-info">
                  <span className="stock-symbol">{stock.symbol}</span>
                  <span className="stock-name">{stock.name}</span>
                </div>
                <div className="stock-price-info">
                  <span className="stock-price">${stock.price.toFixed(2)}</span>
                  <span className={stock.predictedChange >= 0 ? 'stock-change positive' : 'stock-change negative'}>
                    {stock.predictedChange >= 0 ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                    {Math.abs(stock.predictedChange)}%
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          <button className="btn" style={{ width: '100%', marginTop: '1.5rem', backgroundColor: '#f1f5f9', color: 'var(--text-main)' }}>
            View All Signals
          </button>
        </div>
      </div>
    </main>
  );
};

export default Home;
