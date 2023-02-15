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
            <input name="name" placeholder="Recepient's Name" required />
            <input name="age" placeholder="Recepient's Age" required />
            <input name="budget" placeholder="What is your budget?" required />
            <input name="pinterest" placeholder="Recepient's Pinterest profile link (if applicable)" />
        </form>
        <Link to="/choices" style={{ textDecoration: 'none', color: '#FFF' }}>
          <button className="submit">Submit</button>
          </Link>
    </div>
  );
}

export default Requirements;