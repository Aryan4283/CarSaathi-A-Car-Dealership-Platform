import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { vehicles as allVehicles } from '../mockData';
import VehicleCard from '../components/VehicleCard';
import './InventoryPage.css';

const InventoryPage = () => {
  const [displayVehicles, setDisplayVehicles] = useState(allVehicles);
  const [filter, setFilter] = useState('All');
  const [sort, setSort] = useState('default');
  const [searchParams] = useSearchParams();

  useEffect(() => {
    let processedVehicles = [...allVehicles];
    const searchTerm = searchParams.get('search');

    if (searchTerm) {
      processedVehicles = processedVehicles.filter(v =>
        v.make.toLowerCase().includes(searchTerm.toLowerCase()) ||
        v.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
        v.year.toString().includes(searchTerm)
      );
    }

    if (filter !== 'All') {
      processedVehicles = processedVehicles.filter(v => v.make === filter);
    }

    if (sort === 'price-asc') {
      processedVehicles.sort((a, b) => a.price - b.price);
    } else if (sort === 'price-desc') {
      processedVehicles.sort((a, b) => b.price - a.price);
    }

    setDisplayVehicles(processedVehicles);
  }, [filter, sort, searchParams]);

  const makes = ['All', ...Array.from(new Set(allVehicles.map(v => v.make)))];

  return (
    <div className="inventory-page">
      <div className="container">
        <header className="inventory-header">
          <h1>Our Inventory</h1>
          <div className="controls">
            <div className="control-group">
              <label htmlFor="make-filter">Filter by Make:</label>
              <select id="make-filter" value={filter} onChange={(e) => setFilter(e.target.value)}>
                {makes.map(make => <option key={make} value={make}>{make}</option>)}
              </select>
            </div>
            <div className="control-group">
              <label htmlFor="sort-by">Sort by:</label>
              <select id="sort-by" value={sort} onChange={(e) => setSort(e.target.value)}>
                <option value="default">Default</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>
        </header>
        <div className="inventory-grid">
          {displayVehicles.length > 0 ? (
            displayVehicles.map(vehicle => <VehicleCard key={vehicle._id} vehicle={vehicle} />)
          ) : (
            <p className="no-results">No vehicles match your criteria. Please try a different search or filter.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default InventoryPage;
