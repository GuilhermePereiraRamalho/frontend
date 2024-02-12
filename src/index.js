import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ListComponent from './ListComponent';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ListComponent />
  </React.StrictMode>
);


reportWebVitals();
