import React from "react";
import './App.css';
import Start from './components/start';
import Home from './components/home';
import Choices from './components/choices';
import Profile from './components/profile';
import Requirements from './components/requirements';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className = "App">
      <Router>
        <Routes>
            <Route path='/' element={<Start />} />
            <Route path='/home' element={<Home />} />
            <Route path='/choices' element={<Choices />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/requirements' element={<Requirements />} />
        </Routes>
      </Router>
      </div>
  );
}

export default App;