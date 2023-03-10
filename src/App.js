import React, { useState } from "react";
import './App.css';
import Start from './components/start';
import Home from './components/home';
import Choices from './components/choices';
import Profile from './components/profile';
import Requirements from './components/requirements';
import Recommendations from './components/recommendations';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export const StateContext = React.createContext(null);
export const RequirementsContext = React.createContext(null);



function App() {
  const [state, setState] = useState(null);
  const [requirements, setRequirements] = useState(null);
  return (
    <div className = "App">
      <StateContext.Provider value={{ state: state, setState: setState }}>
      <RequirementsContext.Provider value={{ requirements: requirements, setRequirements: setRequirements }}>
      <Router>
        <Routes>
              <Route path='/' element={<Start />} />
              <Route path='/home' element={<Home />} />
              <Route path='/choices' element={<Choices />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/requirements' element={<Requirements />} />
              <Route path='/recommendations' element={<Recommendations />} />
        </Routes>
      </Router>
      </RequirementsContext.Provider>
      </StateContext.Provider>
      </div>
  );
}

export default App;
