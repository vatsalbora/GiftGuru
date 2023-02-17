import React from "react";
import './styles.css';
import { Link } from 'react-router-dom'
import LogoutButton from './logout.js'

function Recommendations() {
    const images = [
        require("../images/options/image3.png"),
        require("../images/options/image9.png"),
        require("../images/options/image2.png"),
        require("../images/options/image7.png")
    ];

    // const handleImageClick = (index) => {
    //     if (selectedImages.includes(index)) {
    //       setSelectedImages(selectedImages.filter(i => i !== index));
    //     } else {
    //       setSelectedImages([...selectedImages, index]);
    //     }
    // };

    return (
        <div className="page">
            <h1>GiftGuru</h1>
            <p>Here are our recommendations!</p>
            <LogoutButton/>
            <div className="recommendation-grid">
                {images.map((image, index) => (
                    <div key={index}>
                        <img src={image} alt = 'Gift'
                        className="image-wrapper"
                        // onClick={() => handleImageClick(index)} 
                    />
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