import React from 'react';
import './App.css';

import { AnimatePresence } from 'framer-motion';
import { Route, Routes, Navigate } from 'react-router-dom';

import Login from './pages/LoginPage';
import Register from './pages/RegistrationPage';

function App() {
  return (
    <AnimatePresence mode="wait">
      <div className="flex w-full h-screen">
        <div className="w-full flex items-center justify-center lg:w-1/2">
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </div>
    </AnimatePresence>
  );
}

export default App;