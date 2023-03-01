import React, {useState, useEffect} from "react";
import './styles.css';
import LogoutButton from './logout.js';
import { Link } from 'react-router-dom'
import axios from 'axios';

const ImageGrid = () => {
  const data = {
    state: ''
  };

  const baseUrl = 'https://duhynhz8i1.loclx.io';
  var bodyFormData = new FormData();
  bodyFormData.append('state', '');
  const [selectedImages, setSelectedImages] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [pins, setPins] = useState();

  useEffect(() => {
    axios.put("/seed").then(response => {
        let images = [];
        console.log('respose');
        console.log(response.data);
        for (let i in response.data['pins']) {
          let image = response.data ['pins'][i];
          image['id'] = i;
          images.push(image);
        }
        console.log(images);
        setPins(images);
        setLoading(false);
    }, bodyFormData);
  }, []);


  const checkmark = require("../images/checkmark.png");

  const handleImageClick = (index) => {
    if (selectedImages.includes(index)) {
      setSelectedImages(selectedImages.filter(i => i !== index));
    } else {
      setSelectedImages([...selectedImages, index]);
    }
    console.log(selectedImages);
  };
  if (isLoading) {
    return <div className="App">Loading...</div>;
  }
  return (
    <div className="page">
      <h1>GiftGuru</h1>
      <p>Select what you think the gift recipient might like!</p>
      <LogoutButton/>
      <Link to="/requirements" style={{ textDecoration: 'none', color: '#FFF' }}>
        <button className="back">Back</button>
      </Link>
      <div className="image-grid">
        {pins.map((image, index) => (
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