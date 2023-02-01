import React from "react";
import './App.css';
import Home from "./components/home.js"
import Requirements from "./components/requirements.js"
import Choices from "./components/choices.js"
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className = "App">
      <Requirements/>
      <Routes>
        <Route exact path = "/" component = {Home} />
        <Route exact path = "/requirements" component = {Requirements} />
        <Route exact path = "/choices" component = {Choices} />
      </Routes>
      
    </div>
  );
}

export default App;
