// In client/src/components/FeaturedVehicles.jsx
import React from 'react';
import { vehicles } from '../mockData'; // Import our mock data
import VehicleCard from './VehicleCard'; // Import our REAL component
import './FeaturedVehicles.css';

const FeaturedVehicles = () => {
  // Get the first 4 vehicles to feature
  const featured = vehicles.slice(0, 4);

  return (
    <section className="featured-vehicles-section">
      <div className="container">
        <h2>New Arrivals</h2>
        <div className="vehicles-grid">
          {featured.map(vehicle => (
            <VehicleCard key={vehicle._id} vehicle={vehicle} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedVehicles;