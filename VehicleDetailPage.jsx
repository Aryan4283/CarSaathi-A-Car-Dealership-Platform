// In client/src/pages/VehicleDetailPage.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { vehicles } from '../mockData';
import './VehicleDetailPage.css';

const VehicleDetailPage = () => {
  const { id } = useParams(); // Get the ID from the URL
  const vehicle = vehicles.find(v => v._id === id);

  if (!vehicle) {
    return (
      <div className="container" style={{ paddingTop: '4rem', textAlign: 'center' }}>
        <h2>Vehicle Not Found</h2>
        <p>The vehicle you are looking for does not exist.</p>
        <Link to="/inventory" className="btn btn-primary" style={{ marginTop: '2rem' }}>Back to Inventory</Link>
      </div>
    );
  }

  return (
    <div className="detail-page">
      <div className="container">
        <div className="detail-grid">
          <div className="detail-image">
            <img src={vehicle.image} alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`} />
          </div>
          <div className="detail-info">
            <h1>{vehicle.year} {vehicle.make} {vehicle.model}</h1>
            <p className="detail-price">${vehicle.price.toLocaleString()}</p>
            <p className="detail-description">{vehicle.description}</p>
            
            <ul className="specs-list">
              <li><strong>Mileage:</strong> <span>{vehicle.mileage.toLocaleString()} mi</span></li>
              <li><strong>Color:</strong> <span>{vehicle.color}</span></li>
              <li><strong>Transmission:</strong> <span>{vehicle.transmission}</span></li>
              <li><strong>Fuel Type:</strong> <span>{vehicle.fuelType}</span></li>
            </ul>

            <div className="features-section">
              <h3>Key Features</h3>
              <ul className="features-list">
                {vehicle.features.map(feature => <li key={feature}>{feature}</li>)}
              </ul>
            </div>

            <button className="btn btn-primary btn-large">Schedule Test Drive</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetailPage;