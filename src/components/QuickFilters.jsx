// In client/src/components/QuickFilters.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './QuickFilters.css';

const QuickFilters = () => {
  return (
    <section className="quick-filters-section">
      <div className="container">
        <h2>Browse by Body Style</h2>
        <div className="filter-buttons">
          <Link to="/inventory?body=SUV" className="filter-btn">SUVs</Link>
          <Link to="/inventory?body=Sedan" className="filter-btn">Sedans</Link>
          <Link to="/inventory?body=Truck" className="filter-btn">Trucks</Link>
          <Link to="/inventory?body=Coupe" className="filter-btn">Coupes</Link>
        </div>
      </div>
    </section>
  );
};

export default QuickFilters;