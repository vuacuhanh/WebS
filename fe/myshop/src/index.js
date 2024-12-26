import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './cartcontext'; // Đảm bảo đường dẫn chính xác
import RouterCustom from './router';
import './style/style.scss';
// Các tệp CSS cho Paper Dashboard
import "bootstrap/dist/css/bootstrap.css"; 
import "./assets/admin/scss/paper-dashboard.scss?v=1.3.0"; 
import "./assets/admin/demo/demo.css"; 
import "perfect-scrollbar/css/perfect-scrollbar.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartProvider>
    <BrowserRouter>
      <RouterCustom />
    </BrowserRouter>
  </CartProvider>
);
