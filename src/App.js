import React, { useState } from "react";
import "./App.css";
import Start from "./components/start";
import Home from "./components/home";
import Choices from "./components/choices";
import Requirements from "./components/requirements";
import Recommendations from "./components/recommendations";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';

export const StateContext = React.createContext(null);
export const RequirementsContext = React.createContext(null);

function App() {
  const [state, setState] = useState(null);
  const [requirements, setRequirements] = useState(null);
  const { isAuthenticated } = useAuth0();
  return (
    <div className="App">
      <StateContext.Provider value={{ state: state, setState: setState }}>
        <RequirementsContext.Provider
          value={{
            requirements: requirements,
            setRequirements: setRequirements,
          }}
        >
          <Router>
            <Routes>
              <Route path="/" element={<Start />} />
              {isAuthenticated && (
                <Route path="/home" element={<Home />} />
              )}
              {isAuthenticated && (
                <Route path="/choices" element={<Choices />} />
              )}
              {isAuthenticated && (
                <Route path="/requirements" element={<Requirements />} />
              )}
              {isAuthenticated && (
                <Route path="/recommendations" element={<Recommendations />} />
              )}
            </Routes>
          </Router>
        </RequirementsContext.Provider>
      </StateContext.Provider>
    </div>
  );
}

export default App;
