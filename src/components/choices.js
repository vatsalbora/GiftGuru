import React, { useState, useEffect, useContext } from "react";
import "./styles.css";
import LogoutButton from "./logout.js";
import { Link } from "react-router-dom";
import axios from "axios";
import { StateContext } from "../App";

const ImageGrid = () => {
  const [selectedImages, setSelectedImages] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [pins, setPins] = useState();
  const { state, setState } = useContext(StateContext);

  useEffect(() => {
    axios
      .put("/seed", state == null ? { state: "", choices: [] } : state)
      .then((response) => {
        let images = [];
        for (let i in response.data["pins"]) {
          let image = response.data["pins"][i];
          images.push(image);
        }
        setState((state) => ({
          choices: state == null ? {} : state.choices,
          state: response.data["state"],
        }));
        setPins(images);
        setLoading(false);
      });
  }, []);

  const checkmark = require("../images/checkmark.png");

  const handleImageClick = (image) => {
    if (!(image["id"] in selectedImages)) {
      setSelectedImages((selectedImages) => ({
        ...selectedImages,
        [image["id"]]: image,
      }));
      setState((state) => ({
        choices: { ...selectedImages, [image["id"]]: image },
        state: state.state,
      }));
    } else {
      let copy = { ...selectedImages };
      delete copy[image["id"]];
      setSelectedImages((selectedImages) => copy);
      setState((state) => ({ choices: copy, state: state.state }));
    }
  };

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }
  return (
    <div className="page">
      <h1>GiftGuru</h1>
      <p>
        Choose social media images the gift recipient may have posted or liked
      </p>
      <LogoutButton />
      <Link
        to="/requirements"
        style={{ textDecoration: "none", color: "#FFF" }}
      >
        <button className="back">Back</button>
      </Link>
      <div className="image-grid">
        {pins.map((image, index) => (
          <div key={image["id"]}>
            <img
              src={image["img"]}
              alt="Gift"
              className={`image-wrapper ${
                image["id"] in selectedImages ? "selected" : ""
              }`}
              onClick={() => handleImageClick(image)}
            />
            {image["id"] in selectedImages && (
              <img src={checkmark} alt="" className="checkmark" />
            )}
          </div>
        ))}
      </div>
      <Link
        to="/recommendations"
        style={{ textDecoration: "none", color: "#FFF" }}
      >
        <button className="submit">Submit</button>
      </Link>
    </div>
  );
};

export default ImageGrid;
