import React from "react";
import './styles.css';
import { Link } from 'react-router-dom'
import LogoutButton from './logout.js'

function Home() {
    return (
        <div className="container">
            <div className="text">
                <h1>Hi there!</h1>
                <LogoutButton/>
                <Link to="/requirements" style={{ textDecoration: 'none', color: '#FFF' }}>
                    <button className="submit">Let's find a gift!</button>
                
                </Link>
            </div>
            <div className="image">
                <img src={require("../images/gift.png")} alt="Gift"/>
            </div>
        </div> 
    );
}

export default Home;