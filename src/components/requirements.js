import React from "react";
import './styles.css';
import { Link } from 'react-router-dom'
import LogoutButton from './logout.js'

function Requirements() {
  return (
    <div className="page">
        <h1>GiftGuru</h1>
        <LogoutButton/>
        <form>
            <input name="name" placeholder="Recipient's Name" required />
            <input name="age" placeholder="Recipient's Age" required />
            <select name="gender" required>
              <option value="" disabled selected>Gender</option>
              <option value="Female">Woman</option>
              <option value="Male">Man</option>
              <option value="Transgender">Transgender</option>
              <option value="Non-Binary/Non-Conforming">Non-Binary/Non-Conforming</option>
              <option value="Prefer Not To Say">Prefer Not To Say</option>
              </select>
            <input name="budget" placeholder="What is your budget?" required />
            <input name="pinterest" placeholder="Recipient's Pinterest profile link (if applicable)" />
        </form>
        <Link to="/choices" style={{ textDecoration: 'none', color: '#FFF' }}>
          <button className="submit">Submit</button>
          </Link>
    </div>
  );
}

export default Requirements;