import React from 'react';
import './App.css';
import appIcon from './assets/app-icon.png';

function App() {
  return (
    <div className="container">
      <img src={appIcon} alt="Сербский переводчик иконка" className="app-icon" />
      <h1 className="app-title">Сербский переводчик</h1>
      <p className="app-desc">AI переводчик для сербского языка. Быстро, удобно, бесплатно!</p>
      <a
        className="appstore-btn"
        href="https://apps.apple.com/rs/app/сербский-переводчик/id6745849589"
        target="_blank"
        rel="noopener noreferrer"
      >
        Скачать в App Store
      </a>
    </div>
  );
}

export default App; 