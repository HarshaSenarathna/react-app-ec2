import React from 'react';
import '../styles/WelcomeScreen.css';

const WelcomeScreen = () => {
  return (
    <div className="welcome-container">
      <div className="neon-box">
        <h1 className="welcome-title">Welcome to Future TODAY</h1>
        <p className="welcome-subtitle">Embrace the Future</p>
        <p className="welcome-subtitle">Future is here</p>
        <button className="start-button">
          Get Started with ci cd piplines with harsha.
        </button>
      </div>
    </div>
  );
};

export default WelcomeScreen;
