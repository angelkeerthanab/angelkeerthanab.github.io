import React from 'react';
import ReactDOM from 'react-dom/client'; // ReactDOM for rendering
import './index.css'; // Optional global styles
import App from './App'; // Root component
//import reportWebVitals from './reportWebVitals'; // Performance tracking (optional)

// Create a root and render the App component into the DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional: Log performance metrics
//reportWebVitals();
