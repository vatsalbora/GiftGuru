import React, { useState, useEffect, useContext } from "react";
import './styles.css';
import { Link } from 'react-router-dom'
import LogoutButton from './logout.js'
import axios from 'axios';
import { useAuth0 } from "@auth0/auth0-react";
import { StateContext } from '../App';

function Home() {
    const { user } = useAuth0();
    const [profiles, setProfiles] = useState();
    const [isLoading, setLoading] = useState(true);
    const { state, setState } = useContext(StateContext);

    useEffect(() => {
        if (user) {
            axios.get("/get_profiles",  { params: { username: user.email } }).then(response => {
                setProfiles(response.data);
                setLoading(false);
            });
        }
    }, [user]);

    // if (isLoading) {
    //     return <div className="page">Loading...</div>;
    // }
    if (isLoading) {
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
    const handleImageClick = (profile) => {
        console.log(profile);
        setState(state => ({ choices:[], state: profile["state"]}));
        console.log(state);
    };
    return (
        <div className="container">
            <div className="text">
                <h1>Hi there!</h1>
                <LogoutButton/>
                <Link to="/requirements" style={{ textDecoration: 'none', color: '#FFF' }}>
                    <button className="submit">Let's find a gift!</button>
                
                </Link>
                <p>Saved Gift Recipients:</p>
                <div className="recommendation-grid">
                {profiles.map((profile, index) => (
                    <div key={profile["state"]} className="profiles">
                        <Link to="/recommendations" onClick={() => handleImageClick(profile)} style={{ textDecoration: 'none', color: '#FFF' }}>
                        <p>{profile["name"] }</p>
                        <img src={require("../images/blue-head.jpg")}></img>
                        </Link>
                    </div>
                ))}
                </div>
            </div>
            <div className="image">
                <img src={require("../images/gift.png")} alt="Gift"/>
            </div>
        </div> 
    );
}
export default Home;