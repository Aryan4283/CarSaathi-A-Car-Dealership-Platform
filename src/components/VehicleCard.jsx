import React from 'react';
import { Link } from 'react-router-dom';
import './VehicleCard.css';

const VehicleCard = ({ vehicle }) => {
  const imageUrl = vehicle.image || '/images/default-car.jpg';

  return (
    <div className="vehicle-card">
      <Link to={`/vehicle/${vehicle._id}`}>
        <div className="card-image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
        <div className="card-content">
          <h3>{vehicle.year} {vehicle.make} {vehicle.model}</h3>
          <p className="price">${vehicle.price.toLocaleString()}</p>
          <div className="card-specs">
            <span>{vehicle.mileage.toLocaleString()} mi</span>
            <span>{vehicle.transmission}</span>
            <span>{vehicle.fuelType}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default VehicleCard;
