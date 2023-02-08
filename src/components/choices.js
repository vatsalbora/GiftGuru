import React from "react";
import './choices.css';

function Choices() {
  const shoe = require("../images/shoe.png");
  const perfume = require("../images/perfume.png");
  return (
    <div className="Choices">
        <h1>GiftGuru</h1>
        <p>Choose the one you prefer</p>
        <img src={shoe} alt="Shoe" className="align"/>
        <img src={perfume} alt="Perfume" className="align"/>
    </div>
  );
}

export default Choices;