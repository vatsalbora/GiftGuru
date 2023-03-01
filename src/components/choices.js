import React, {useState} from "react";
import './styles.css';
import LogoutButton from './logout.js';
import { Link } from 'react-router-dom'
import axios from 'axios';
const ImageGrid = () => {
  const data = {
    state: ''
  };
const baseUrl = 'https://duhynhz8i1.loclx.io';
const [selectedImages, setSelectedImages] = useState([]);

const updateData = async (data) => {
  try {
    const response = await axios.put(`${baseUrl}/seed`, data, {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    });  
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};
let response = updateData(data);
let images = [];

for (let i in response['pins']) {
  let image = response['pins'][i];
  image['id'] = i;
  images.push(image);
}

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
      <Link to="/requirements" style={{ textDecoration: 'none', color: '#FFF' }}>
        <button className="back">Back</button>
      </Link>
      <div className="image-grid">
        {images.map((image, index) => (
          <div key={image['id']}>
            <img src={image['img']} alt = 'Gift'
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