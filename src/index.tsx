import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import theBackend from './theBackend';
import { ThemeProvider } from '@mui/material';
import theme from './theme';

console.debug('[myveryownhq] Connected to backend.', { theBackend });

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

console.debug('[myveryownhq] React render()...');

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// Learn more: https://bit.ly/CRA-vitals
reportWebVitals((msg: any) => console.log('[myveryownhq/webvitals] ', msg));
