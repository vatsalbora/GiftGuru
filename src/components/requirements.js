import React from "react";
import './requirements.css';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

const Button = styled.button`
  padding: 20px 160px;
  cursor: pointer; 
  font-size: 26px;
  border-radius: 10px;
  border: 1px solid black;
  display: inline-flex;
  align-items: center; 
`

function Requirements() {
  return (
    <div className="Requirements">
        <h1>GiftGuru</h1>
        <form>
            <input name="name" placeholder="Recepient's Name" required />
            <input name="age" placeholder="Recepient's Age" required />
            <input name="budget" placeholder="What is your budget?" required />
            <input name="pinterest" placeholder="Recepient's Pinterest profile link (if applicable)" />
        </form>
          <Link to="/choices" style={{ textDecoration: 'none', color: '#FFF' }}>
            <Button id="submit">Submit</Button>      
          </Link>
    </div>
  );
}

export default Requirements;