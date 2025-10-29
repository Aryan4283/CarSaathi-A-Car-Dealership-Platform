// In client/src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Core Components
import Header from './components/Header';

// Page Components
import HomePage from './pages/HomePage';
import InventoryPage from './pages/InventoryPage';
import AboutUsPage from './pages/AboutUsPage';
import SellCarPage from './pages/SellCarPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import VehicleDetailPage from './pages/VehicleDetailPage';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/inventory" element={<InventoryPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/sell-my-car" element={<SellCarPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/vehicle/:id" element={<VehicleDetailPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;