import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './cartcontext'; // Đảm bảo đường dẫn chính xác
import RouterCustom from './router';
import './style/style.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartProvider>
    <BrowserRouter>
      <RouterCustom />
    </BrowserRouter>
  </CartProvider>
);
