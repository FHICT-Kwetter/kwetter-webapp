import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import App from './app/App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <BrowserRouter>
        <React.StrictMode>
            <CssBaseline />
            <App />
        </React.StrictMode>
    </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
