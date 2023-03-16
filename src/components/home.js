import React, { useState, useEffect, useContext  } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import LogoutButton from "./logout.js";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { StateContext } from "../App";

function Home() {
  const { user } = useAuth0();
  const [profiles, setProfiles] = useState();
  const { setState } = useContext(StateContext);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      axios
        .get("/get_profiles", { params: { username: user.email } })
        .then((response) => {
          setProfiles(response.data);
          setLoading(false);
        });
    }
  }, [user, isLoading]);

  const handleDelete = (profile) => {
    if (profiles && profile) {
      axios.post("/get_profiles", {
        email: profile['email'],
        name: profile['name'],
        state: profile['state']
      }).then(() =>
        setLoading(true)
      );
    }
  };

  if (!(!isLoading && profiles && profiles.length > 0)) {
    return (
      <div className="container">
        <div className="text">
          <h1 style={{ marginBottom: "0" }}>Hi there!</h1>
          <LogoutButton />
          <Link
            to="/requirements"
            style={{ textDecoration: "none", color: "#FFF" }}
          >
            <button className="submit">Let's find a gift!</button>
          </Link>
        </div>
        <div className="image">
          <img src={require("../images/gift.png")} alt="Gift" />
        </div>
        <div className="profile-grid">
          <div className="profile-image-grid"></div>
        </div>
      </div>
    );
  }

  const handleImageClick = (profile) => {
    console.log(profile);
    setState((state) => ({ choices: [], state: profile["state"] }));
  };
  return (
    <div className="container">
      <div className="text">
        <h1 style={{ marginBottom: "0" }}>Hi there!</h1>
        <LogoutButton />
        <Link
          to="/requirements"
          style={{ textDecoration: "none", color: "#FFF" }}
        >
          <button className="submit">Let's find a gift!</button>
        </Link>
      </div>
      <div className="image">
        <img src={require("../images/gift.png")} alt="Gift" />
      </div>
      <div className="profile-grid">
        <p
          style={{
            fontSize: "30px",
            textDecoration: "underline",
            margin: "0",
          }}
        >
          Saved Gift Recipients
        </p>
        <div className="profile-image-grid">
          {profiles.map((profile, index) => (
            <div key={profile["state"]} className="profiles">
              <div className="delete"
                  onClick={() => handleDelete(profile)}
              > x </div>
              <Link
                to="/recommendations"
                onClick={() => handleImageClick(profile)}
                style={{
                  textDecoration: "none",
                  color: "#FFF",
                }}
              >
                <p>{profile["name"]}</p>
                <img src={require("../images/blue-head.jpg")}></img>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Home;
