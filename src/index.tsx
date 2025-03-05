import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import './styles/globals.css';
import App from './app';

const root = createRoot(document.getElementById('app-root') as HTMLElement);
root.render(
  <Suspense
    fallback={
      <div className="loading">
        <div className="loading-icon" />
      </div>
    }>
    <CssBaseline />
    <App />
  </Suspense>
);
