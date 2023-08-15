import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import UserList from './pages/UserList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/Dashboard">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/UserList" element={<UserList />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
