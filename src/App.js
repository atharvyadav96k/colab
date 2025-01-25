import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Register from './components/Register';
import SpaceView from './components/SpaceView';

export default function App() {
  return (
    <Router>
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path='/register' element={<Register />}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/space/:id" element={<SpaceView />}/>
        </Routes>
      </div>
    </Router>
  );
}
