import React, {useState} from "react";
import './styles.css';
import LogoutButton from './logout.js';
import { Link } from 'react-router-dom'

const ImageGrid = () => {
  const images = [
    require("../images/options/image11.png"),
    require("../images/options/image12.png"),
    require("../images/options/image13.png"),
    require("../images/options/image14.png"),
    require("../images/options/image15.png"),
    require("../images/options/image16.png"),
    require("../images/options/image17.png"),
    require("../images/options/image18.png"),
    require("../images/options/image19.png"),
    require("../images/options/image20.png")
  ];

  const [selectedImages, setSelectedImages] = useState([]);
  
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // handle file submission here
  // }

  const checkmark = require("../images/checkmark.png");

  const handleImageClick = (index) => {
    if (selectedImages.includes(index)) {
      setSelectedImages(selectedImages.filter(i => i !== index));
    } else {
      setSelectedImages([...selectedImages, index]);
    }
  };

  return (
    <div className="page">
      <h1>GiftGuru</h1>
      <p>Select what you think the gift recipient might like!</p>
      <LogoutButton/>
      <div className="image-grid">
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt = 'Gift'
            className={`image-wrapper ${selectedImages.includes(index) ? 'selected' : ''}`}
            onClick={() => handleImageClick(index)} />
            {selectedImages.includes(index) && (<img src={checkmark} alt="" className="checkmark"/>)}
          </div>
        ))}
      </div>
      <Link to="/recommendations-temp" style={{ textDecoration: 'none', color: '#FFF' }}>
        <button className="submit">Submit</button>
        </Link>
    </div>
  );
};

export default ImageGrid;