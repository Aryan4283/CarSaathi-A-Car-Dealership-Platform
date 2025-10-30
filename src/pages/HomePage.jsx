import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { vehicles } from '../mockData';
import VehicleCard from '../components/VehicleCard';
import './HomePage.css';

const HeroSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      navigate(`/inventory?search=${encodeURIComponent(searchTerm)}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Your Next Drive Starts Here</h1>
        <p className="hero-subtitle">Discover a curated selection of premium new and pre-owned vehicles.</p>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by Make, Model, or Year..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button className="btn btn-primary" onClick={handleSearch}>Search</button>
        </div>
      </div>
    </div>
  );
};

const FeaturedVehicles = () => {
  const featured = vehicles.slice(0, 4);
  return (
    <section className="page-section">
      <div className="container">
        <h2 className="section-title">New Arrivals</h2>
        <div className="vehicles-grid">
          {featured.map(vehicle => (
            <VehicleCard key={vehicle._id} vehicle={vehicle} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ValueTrade = () => (
  <section className="page-section value-trade-section">
    <div className="container">
      <h2 className="section-title">What's Your Car Worth?</h2>
      <p>Get a real, transparent offer in minutes. We'll buy your car, even if you don't buy ours.</p>
      <Link to="/sell-my-car" className="btn btn-primary btn-large">Get Your Instant Offer</Link>
    </div>
  </section>
);

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <FeaturedVehicles />
      <ValueTrade />
    </>
  );
};

export default HomePage;
