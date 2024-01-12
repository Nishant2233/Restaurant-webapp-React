// Login.jsx

import React, { useState } from 'react';
import './Login.css';


const ShapePuzzle = ({ onSubmit, onClose }) => {
  const [generatedShape, ] = useState(null);
  const shapes = ['square', 'circle', 'rectangle', 'triangle'];
  const targetShapes = ['square', 'circle', 'rectangle', 'triangle'];
  const randomTargetShape = targetShapes[Math.floor(Math.random() * targetShapes.length)];
  const [selectedShape, setSelectedShape] = useState(null);

  const handleShapeHover = (event) => {
    if (event.target.dataset.shape === randomTargetShape) {
      event.target.classList.add('puzzle__shape--popped');
    }
  };

  const handleShapeLeave = (event) => {
    if (event.target.dataset.shape === randomTargetShape) {
      event.target.classList.remove('puzzle__shape--popped');
    }
  };

  const handleShapeSelect = (event) => {
    setSelectedShape(event.target.dataset.shape);
    if (event.target.dataset.shape === randomTargetShape) {
      onSubmit();
    } else {
      alert('Try Again! Wrong Choice!');
      setSelectedShape(null);
    }
  };

  const renderShape = shape => {
    let shapeClassName = `puzzle__shape puzzle__shape--${shape}`;
    if (shape === randomTargetShape) {
      shapeClassName += ' puzzle__shape--target';
    }

    if (shape === selectedShape) {
      shapeClassName += ' puzzle__shape--selected';
    }

    if (shape === randomTargetShape && selectedShape) {
      shapeClassName += ' puzzle__shape--selected';
    }

    return (
      <div
        data-shape={shape}
        className={shapeClassName}
        onMouseOver={handleShapeHover}
        onMouseOut={handleShapeLeave}
        onClick={handleShapeSelect}
      />
    );
  };

  return (
    <div className="puzzle__overlay">
      <div className="puzzle__container">
        <h2>Shape Recognition Challenge</h2>
        <p>Find and Click the Target Shape.</p>
        <div className="puzzle__shapes">
          {shapes.map(shape => renderShape(shape))}
        </div>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};
const Login = ({ onClose, onSubmit }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [registrationSuccessful, setRegistrationSuccessful] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = () => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const user = storedUsers.find(u => u.username === username && u.password === password);

    if (user) {
      // Successful login, show the puzzle
      setRegistrationSuccessful(true);
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  const handleRegister = () => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

    if (username && password) {
      const isUsernameTaken = storedUsers.some(u => u.username === username);

      if (!isUsernameTaken) {
        storedUsers.push({ username, password });
        localStorage.setItem('users', JSON.stringify(storedUsers));
        setRegistrationSuccessful(true);
        setIsRegistering(false);
        setError('');
      } else {
        setError('Username is already taken. Please choose a different one.');
      }
    } else {
      setError('Please fill in both username and password fields.');
    }
  };

  // Redirect to puzzle after successful login
  if (registrationSuccessful) {
    return (
      <ShapePuzzle
        onSubmit={() => onSubmit(username, password)}
        onClose={onClose}
      />
    );
  }

  return (
    <div className={`login__overlay ${isRegistering ? 'registering' : ''}`}>
      <div className="login__container">
        <h2>{isRegistering ? 'Register' : 'Login'}</h2>
        <div className="login__form">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="login__error">{error}</p>}
          {isRegistering ? (
            <button className="login__button" onClick={handleRegister}>
              Register
            </button>
          ) : (
            <button className="login__button" onClick={handleLogin}>
              Login
            </button>
          )}
        </div>
        <p className="login__toggle" onClick={() => setIsRegistering(!isRegistering)}>
          {isRegistering ? 'Already have an account? Login' : "Don't have an account? Register"}
        </p>
        <button className="login__close" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Login;
