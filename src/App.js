import React from "react";
import './App.css';
import Login from "./components/login.js";
import Logout from "./components/logout.js";

function App() {
  return (
    <div className = "App">
      <h1>test</h1>
      <Login/>
      <Logout/>
      <h1>test</h1>
    </div>
  );
}

export default App;