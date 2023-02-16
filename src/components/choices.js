import React, {useState} from "react";
import './styles.css';
import LogoutButton from './logout.js';
import { Link } from 'react-router-dom'

const ImageGrid = () => {
  const images = [
    require("../images/options/image1.png"),
    require("../images/options/image2.png"),
    require("../images/options/image3.png"),
    require("../images/options/image4.png"),
    require("../images/options/image5.png"),
    require("../images/options/image6.png"),
    require("../images/options/image7.png"),
    require("../images/options/image8.png"),
    require("../images/options/image9.png"),
    require("../images/options/image10.png")
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
      <Link to="/recommendations" style={{ textDecoration: 'none', color: '#FFF' }}>
        <button className="submit">Submit</button>
        </Link>
    </div>
  );
};

export default ImageGrid;