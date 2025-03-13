//index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Import ReactDOM for React 18+
import './index.css'; // Import the CSS file
import App from './App'; // Import the main App component
import reportWebVitals from './reportWebVitals'; // Optional: For reporting performance metrics

// Create the root where the app will be rendered
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside <React.StrictMode> for development checks
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional: Measure performance metrics
reportWebVitals();
