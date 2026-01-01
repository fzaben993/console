import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// Import Pink Design
import '@appwrite.io/pink-legacy/dist/pink.css';
// Corrected path for pink-icons
import '@appwrite.io/pink-icons/dist/icon.css';
import './app.css'; // Global styles if any

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
