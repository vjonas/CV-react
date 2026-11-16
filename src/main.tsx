import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import CvV2 from './v2/CvV2.tsx';
import './index.css';

// The original CV lives at /, the Swiss grid redesign at /v2.
const isV2 = /^\/v2\/?$/.test(window.location.pathname);
if (isV2) {
  document.title = 'Jonas Vercammen – CV';
  // ?theme=dark or ?theme=light pins the colour scheme, on screen and in the
  // PDF export. Without it the screen follows the OS and print is light.
  const theme = new URLSearchParams(window.location.search).get('theme');
  if (theme === 'dark' || theme === 'light') {
    document.documentElement.dataset.theme = theme;
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>{isV2 ? <CvV2 /> : <App />}</StrictMode>
);
