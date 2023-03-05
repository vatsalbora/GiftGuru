import React, { useState, useEffect, useContext } from "react";
import './styles.css';
import { Link } from 'react-router-dom'
import LogoutButton from './logout.js'
import { StateContext } from '../App';
import axios from 'axios';

function Recommendations() {

    const [isLoading, setLoading] = useState(true);
    const [pins, setPins] = useState();
    const { state, setState } = useContext(StateContext);
    
    if (state == null) {
        return <div className="App">User state does not exist, please go to choices page...</div>;
    }
    // TODO: deal with null conditions, redirect or something
    useEffect(() => {
        // axios.put("/get_recomendations").then(response => {
        axios.put("/get_recomendations", state == null ? {state: '', choices: []} : state).then(response => {
            let images = [];
            for (let i in response.data['pins']) {
                let image = response.data['pins'][i];
                image['id'] = i;
                images.push(image);
            }
            images = images.slice(0,4);
            setState(state => ({ choices: [], state: response.data['state'] }));
            setPins(images);
            setLoading(false);
        });
    }, []);
    if (isLoading) {
        return <div className="App">Loading...</div>;
    }

    return (
        <div className="page">
            <h1>GiftGuru</h1>
            <p>Here are our recommendations!</p>
            <LogoutButton />
            <div className="recommendation-grid">
                {pins.map((image, index) => (
                    <div key={image['id']}>
                        <a href={image['link']} >
                            <img src={image['img']} alt='Gift'
                                className="image-wrapper"
                            />
                        </a>
                    </div>
                ))}
            </div>
            <Link to="/choices" style={{ textDecoration: 'none', color: '#FFF' }}>
                <button className="submit">Refresh</button>
            </Link>
            <Link to="/home" style={{ textDecoration: 'none', color: '#FFF' }}>
                <button className="submit">Dashboard</button>
            </Link>
        </div>
    );
}

export default Recommendations;