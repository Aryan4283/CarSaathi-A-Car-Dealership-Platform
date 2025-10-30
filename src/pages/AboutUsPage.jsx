// In client/src/pages/AboutUsPage.jsx
import React from 'react';
import './AboutUsPage.css';

const AboutUsPage = () => {
  return (
    <div className="about-us-page">
      <div className="container">
        <h1>About CarSaathi</h1>
        <p className="lead">Your trusted partner in finding the perfect vehicle.</p>
        <div className="about-content">
          <p>
            Founded in 2025, CarSaathi was built on a simple principle: make the car buying and selling process transparent, fair, and enjoyable. We believe that everyone deserves to drive a car they love, and our mission is to connect our customers with high-quality, reliable vehicles that fit their lifestyle and budget.
          </p>
          <p>
            Our team is comprised of passionate automotive experts who carefully inspect and select every car in our inventory. We pride ourselves on our curated selection, ensuring that every vehicle on our lot meets our high standards of quality and safety.
          </p>
          <p>
            Whether you're looking for a family-friendly SUV, a fuel-efficient sedan for your daily commute, or the truck of your dreams, CarSaathi is here to help. Thank you for choosing us as your partner on the road ahead.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;