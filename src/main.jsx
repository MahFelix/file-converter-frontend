import React from 'react';
import ReactDOM from 'react-dom/client';

import { StyledEngineProvider } from '@mui/styled-engine-sc';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
        <App />
    </StyledEngineProvider>
  </React.StrictMode>
);