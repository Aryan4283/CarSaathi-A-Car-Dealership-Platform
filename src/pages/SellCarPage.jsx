// In client/src/pages/SellCarPage.jsx
import React, { useState } from 'react';
import './SellCarPage.css';

const SellCarPage = () => {
  const [step, setStep] = useState(1);
  const [vin, setVin] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [decodedCar, setDecodedCar] = useState(null);
  const [carDetails, setCarDetails] = useState({ mileage: '', condition: 'Good' });
  const [offer, setOffer] = useState(0);

  // Step 1: Handle VIN submission and call the NHTSA API
  const handleVinSubmit = async () => {
    if (vin.length !== 17) {
      setError('Please enter a valid 17-digit VIN.');
      return;
    }
    setIsLoading(true);
    setError('');
    try {
      const response = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVin/${vin}?format=json`);
      if (!response.ok) throw new Error('Failed to decode VIN.');
      
      const data = await response.json();
      const results = data.Results;

      const findValue = (variable) => results.find(item => item.Variable === variable)?.Value || 'N/A';

      const carData = {
        year: findValue('Model Year'),
        make: findValue('Make'),
        model: findValue('Model'),
      };

      if (carData.make === 'N/A') {
        throw new Error('VIN not found or invalid. Please check and try again.');
      }

      setDecodedCar(carData);
      setStep(2);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Step 2: Calculate the offer based on car details
  const calculateOffer = () => {
    if (!carDetails.mileage) {
      setError('Please enter the current mileage.');
      return;
    }
    setError('');
    
    let basePrice = 40000;
    const makeLower = decodedCar.make.toLowerCase();
    if (makeLower === 'bmw' || makeLower === 'mercedes-benz' || makeLower === 'audi') {
      basePrice = 55000;
    } else if (makeLower === 'tesla') {
      basePrice = 60000;
    }

    const currentYear = new Date().getFullYear();
    const age = currentYear - parseInt(decodedCar.year);
    const ageDepreciation = age * 1500;
    const mileageDepreciation = parseInt(carDetails.mileage) * 0.15;

    let conditionMultiplier = 1.0;
    if (carDetails.condition === 'Good') conditionMultiplier = 0.9;
    if (carDetails.condition === 'Fair') conditionMultiplier = 0.75;

    const finalOffer = (basePrice - ageDepreciation - mileageDepreciation) * conditionMultiplier;

    setOffer(Math.round(finalOffer / 100) * 100);
    setStep(3);
  };

  const handleDetailsChange = (e) => {
    setCarDetails({ ...carDetails, [e.target.id]: e.target.value });
  };

  return (
    <div className="sell-car-page">
      <div className="container">
        <div className="form-container">
          {/* --- Step 1: VIN Input --- */}
          <div className={`form-step ${step === 1 ? 'active' : ''}`}>
            <h1>Get Your Instant Offer</h1>
            <p>Start with your VIN to get the most accurate offer in minutes.</p>
            {error && <p className="error-message">{error}</p>}
            <div className="form-group">
              <label htmlFor="vin">Vehicle Identification Number (VIN)</label>
              <input
                type="text"
                id="vin"
                placeholder="Enter your 17-digit VIN"
                value={vin}
                onChange={(e) => setVin(e.target.value.toUpperCase())}
                maxLength="17"
              />
            </div>
            <button
              className="btn btn-primary btn-large"
              onClick={handleVinSubmit}
              disabled={isLoading || vin.length !== 17}
            >
              {isLoading ? 'Decoding...' : 'Get Started'}
            </button>
          </div>

          {/* --- Step 2: Vehicle Details --- */}
          <div className={`form-step ${step === 2 ? 'active' : ''}`}>
            {decodedCar && <h1>{decodedCar.year} {decodedCar.make} {decodedCar.model}</h1>}
            <p>Tell us a bit more about your car's condition.</p>
            {error && <p className="error-message">{error}</p>}
            <div className="form-group">
              <label htmlFor="mileage">Current Mileage</label>
              <input type="number" id="mileage" placeholder="e.g., 50000" value={carDetails.mileage} onChange={handleDetailsChange} />
            </div>
            <div className="form-group">
              <label htmlFor="condition">Overall Condition</label>
              <select id="condition" value={carDetails.condition} onChange={handleDetailsChange}>
                <option>Excellent</option>
                <option>Good</option>
                <option>Fair</option>
              </select>
            </div>
            <div className="button-group">
              <button className="btn btn-secondary" onClick={() => setStep(1)}>Back</button>
              <button className="btn btn-primary" onClick={calculateOffer}>Get My Offer</button>
            </div>
          </div>

          {/* --- Step 3: The Offer --- */}
          <div className={`form-step ${step === 3 ? 'active' : ''}`}>
            <h1>Your Instant Offer</h1>
            {decodedCar && <p>For your {decodedCar.year} {decodedCar.make} {decodedCar.model}</p>}
            <div className="offer-box">
              <h2>Instant Cash Offer</h2>
              <p className="offer-price">${offer.toLocaleString()}</p>
              <p className="offer-disclaimer">Offer valid for 7 days. Subject to in-person inspection.</p>
            </div>
            <button className="btn btn-primary btn-large">Schedule Your Appraisal</button>
            <button className="btn-link" onClick={() => setStep(2)}>Go Back and Edit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellCarPage;
