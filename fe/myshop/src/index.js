import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { HomePage } from './pages/users/HomePage/HomePage';
import {BrowserRouter} from "react-router-dom"
import RouterCustom from './router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <RouterCustom/>
  </BrowserRouter>
);

reportWebVitals();
