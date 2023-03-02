import React, { useState } from "react";
import './App.css';
import Start from './components/start';
import Home from './components/home';
import Choices from './components/choices';
import Profile from './components/profile';
import Requirements from './components/requirements';
import Recommendations from './components/recommendations';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Choices1 from './components/choices-temp';
import Recommendations1 from './components/recommendations-temp';

export const StateContext = React.createContext(null);



function App() {
  const [state, setState] = useState(null);
  return (
    <div className = "App">
      <StateContext.Provider value={{ state: state, setState: setState }}>
      <Router>
        <Routes>
              <Route path='/' element={<Start />} />
              <Route path='/home' element={<Home />} />
              <Route path='/choices' element={<Choices />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/requirements' element={<Requirements />} />
              <Route path='/recommendations' element={<Recommendations />} />
              <Route path='/choices-temp' element={<Choices1 />} />
              <Route path='/recommendations-temp' element={<Recommendations1 />} />
        </Routes>
      </Router>
      </StateContext.Provider>
      </div>
  );
}

export default App;