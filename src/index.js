import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; // * BrowserRouter 불러오기
import RandingPage from "./LandingPage";



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  
  <BrowserRouter>
    <App />
  </BrowserRouter>
  
);

