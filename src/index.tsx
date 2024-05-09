import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router';
import { NextUIProvider } from '@nextui-org/react';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <NextUIProvider>
      <RouterProvider router = {router} />
    </NextUIProvider>
  </React.StrictMode>
);

reportWebVitals();
