// main.jsx

import React from 'react';
import { createRoot } from 'react-dom/client'; // Import from "react-dom/client"
import App from './App.jsx';
import './index.css';

// Use createRoot from "react-dom/client"
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
