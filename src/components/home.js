import React from "react";
import './styles.css';
import { Link } from 'react-router-dom'
import LogoutButton from './logout.js'

function Home() {
    return (
        <div className="page">
            <h1>GiftGuru</h1>
            <LogoutButton/>
            <form>
                <input name="Name" placeholder="Name" required/>
            </form>
                <Link to="/requirements" style={{ textDecoration: 'none', color: '#FFF' }}>
                    <button className="submit">Submit</button>
                </Link>
        </div> 
    );
}

export default Home;