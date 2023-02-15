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
                <input name="age" placeholder="Age" required/>
                <select name="gender" required>
                    <option value="" disabled selected>Gender</option>
                    <option value="Woman">Woman</option>
                    <option value="Man">Man</option>
                    <option value="Transgender">Transgender</option>
                    <option value="Non-Binary/Non-Conforming">Non-Binary/Non-Conforming</option>
                    <option value="Prefer Not To Say">Prefer Not To Say</option>
                    </select>
            </form>
                <Link to="/requirements" style={{ textDecoration: 'none', color: '#FFF' }}>
                    <button className="submit">Submit</button>
                </Link>
        </div> 
    );
}

export default Home;