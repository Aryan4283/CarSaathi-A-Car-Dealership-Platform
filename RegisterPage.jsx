import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AuthForm.css';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    console.log('Form submitted successfully:', { name: formData.name, email: formData.email });
    alert('Registration successful! (Frontend validation passed)');
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h1>Create an Account</h1>
        {error && <p className="error-message">{error}</p>}
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" onChange={handleChange} required />
        </div>
        <button type="submit" className="auth-button">Sign Up</button>
        <p className="form-link">
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;
