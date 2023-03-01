import React from "react";
import './styles.css';
import { Link } from 'react-router-dom'
import LogoutButton from './logout.js'

function Requirements() {
  return (
    <div className="page">
        <h1>GiftGuru</h1>
        <LogoutButton/>
        <Link to="/home" style={{ textDecoration: 'none', color: '#FFF' }}>
          <button className="back">Back</button>
        </Link>
        <form>
            <input name="name" placeholder="Waht is the recipient's name?" required />
            <select name="age" required>
              <option value="" disabled selected>What is the recipient's age group?</option>
              <option value="10">&lt; 10 years</option>
              <option value="18">10-18 years</option>
              <option value="35">19-35 years</option>
              <option value="50">36-50 years</option>
              <option value="">&gt; 50 years</option>
              </select>
            <select name="gender" required>
              <option value="" disabled selected>Preferred gift theme for the recipient</option>
              <option value="Female">Feminine</option>
              <option value="Male">Masculine</option>
              <option value="">Gender-Neutral</option>
              </select>
            <select name="budget" required>
              <option value="" disabled selected>What is your budget? (CAD)</option>
              <option value="50">&lt; $50</option>
              <option value="100">$50-$100</option>
              <option value="200">$100-$200</option>
              <option value="500">$200-$500</option>
              <option value="">&gt; $500</option>
              </select>
            <input name="pinterest" placeholder="Recipient's Pinterest username (if applicable)" />
        </form>
        <Link to="/choices" style={{ textDecoration: 'none', color: '#FFF' }}>
          <button className="submit">Submit</button>
          </Link>
    </div>
  );
}

export default Requirements;