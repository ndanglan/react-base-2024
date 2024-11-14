import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from '@/app';
import reportWebVitals from '@/reportWebVital';

import './index.css';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);

reportWebVitals(console.log);
