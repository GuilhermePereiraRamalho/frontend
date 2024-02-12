import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import UserLists from './UserLists';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserLists />
  </React.StrictMode>
);


reportWebVitals();
