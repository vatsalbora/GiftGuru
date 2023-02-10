import React from "react";
import './requirements.css';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

const Button = styled.button`
  padding: 20px 155px;
  outline: 0;
  cursor: pointer; 
  font-size: 26px;
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
        <Button id="submit">
          <Link to="/choices" style={{ textDecoration: 'none', color: '#FFF' }}>Submit</Link>
        </Button>
    </div>
  );
}

export default Requirements;