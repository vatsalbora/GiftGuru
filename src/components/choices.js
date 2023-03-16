import React, { useState, useEffect, useContext } from "react";
import "./styles.css";
import LogoutButton from "./logout.js";
import { Link } from "react-router-dom";
import axios from "axios";
import { StateContext } from "../App";
import { RequirementsContext } from "../App";

const ImageGrid = () => {
  const [selectedImages, setSelectedImages] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [pins, setPins] = useState();
  const [reset, setReset] = useState(true);
  const { state, setState } = useContext(StateContext);
  const { requirements  } = useContext(RequirementsContext);

  useEffect(() => {
    axios
      .put("/seed", state == null ? { 
          state: "", 
          choices: [],
          budget: !!requirements?requirements['budget']:'',
          name: !!requirements?requirements['name']:''
      } : {
          state: state.state,
          choices: state.choices,
          budget: !!requirements?requirements['budget']:'',
          name: !!requirements?requirements['name']:''
      })
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
  }, [reset]);


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
      <p style={{ fontSize: "35px" }}>
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
          </div>
        ))}
      </div>
      <Link
        to="/recommendations"
        style={{ textDecoration: "none", color: "#FFF" }}
      >
        <button className="submit">Submit</button>
      </Link>
        <button className="submit" onClick={()=>setReset(reset => !reset)}>Reset Choices</button>
    </div>
  );
};

export default ImageGrid;
