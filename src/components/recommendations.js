
import React, { useState, useEffect, useContext } from "react";
import './styles.css';
import { Link } from 'react-router-dom'
import LogoutButton from './logout.js'
import { StateContext } from '../App';
import axios from 'axios';
import { useAuth0 } from "@auth0/auth0-react";
import { RequirementsContext } from '../App';

function Recommendations() {

    const [isLoading, setLoading] = useState(true);
    const [pins, setPins] = useState();
    const { state, setState } = useContext(StateContext);
    const { user } = useAuth0();
    const { requirements, setRequirements } = useContext(RequirementsContext);

    useEffect(() => {
        axios.put("/get_recomendations", state == null ? {state: '', choices: []} : state).then(response => {
            let images = [];
            for (let i in response.data['pins']) {
                let image = response.data['pins'][i];
                image['id'] = i;
                images.push(image);
            }
            images = images.slice(0,4);
            setState(state => ({ choices: state == null ? {} : state.choices, state: response.data['state'] }));
            setPins(images);
            setLoading(false);
        });
    }, []);
    if (isLoading) {
        return <div className="page">Loading...</div>;
    }

    const handleSubmit = () => {
        console.log(requirements);
        if (state && requirements) {
            axios.put("/get_profiles", {state: state.state, email: user.email, name: requirements.name});
        }
    };
    return (
        <div className="page">
            <h1>GiftGuru</h1>
            <p>Here are our recommendations!</p>
            <p>If you are not satisfied click "Continue search" to improve recommendations</p>
            <LogoutButton />
            <div className="recommendation-grid">
                {pins.map((image, index) => (
                    <div key={image['id']}>
                        <a href={image['link']} target="_blank">
                            <img src={image['img']} alt='Gift'
                                className="image-wrapper"
                            />
                        </a>
                    </div>
                ))}
            </div>
            <Link to="/choices" style={{ textDecoration: 'none', color: '#FFF' }}>
                <button className="submit">Continue search</button>
            </Link>
            <Link to="/home" style={{ textDecoration: 'none', color: '#FFF' }}>
                <button className="submit">Home</button>
            </Link>
            <Link to="/home" style={{ textDecoration: 'none', color: '#FFF' }}>
                <button className="submit" onClick={() => handleSubmit()}>Save profile</button>
            </Link>
        </div>
    );
}

export default Recommendations;
