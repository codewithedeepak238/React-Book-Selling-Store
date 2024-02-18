import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { FilterProvider, CartProvider, UserProvider } from './context';

import App from './App';
import { ScrollToTop } from './components';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <UserProvider>
        <CartProvider>
          <FilterProvider>
            <ScrollToTop/>
            <ToastContainer position="bottom-right" autoClose={5000}/>
            <App />
          </FilterProvider>
        </CartProvider>
      </UserProvider>
    </Router>
  </React.StrictMode>
);
