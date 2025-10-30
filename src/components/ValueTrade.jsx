// In client/src/components/ValueTrade.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './ValueTrade.css';

const ValueTrade = () => {
  return (
    <section className="value-trade-section">
      <div className="container">
        <h2>What's Your Car Worth?</h2>
        <p>Get a real offer in minutes. We'll buy your car, even if you don't buy from us.</p>
        <Link to="/sell-my-car" className="btn btn-primary btn-large">Get Your Offer</Link>
      </div>
    </section>
  );
};

export default ValueTrade;