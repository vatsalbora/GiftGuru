import React from "react";
import './home.css';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

const Button = styled.button`
  padding: 20px 155px;
  outline: 0;
  cursor: pointer; 
  font-size: 26px;
`

function Home() {
    return (
        <div className="Home">
            <h1>GiftGuru</h1>
            <form>
                <input name="firstName" placeholder="First name" required/>
                <input name="lastName" placeholder="Last name" required/>
            </form>
            <Button id="submit">
                <Link to="/requirements" style={{ textDecoration: 'none', color: '#FFF' }}>Submit</Link>
            </Button>
        </div> 
    );
}

export default Home;