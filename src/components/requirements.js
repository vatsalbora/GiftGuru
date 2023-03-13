import React, { useState, useContext } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import LogoutButton from "./logout.js";
import { RequirementsContext } from "../App";

function Requirements() {
  const { requirements, setRequirements } = useContext(RequirementsContext);
  return (
    <div className="page">
      <h1>GiftGuru</h1>
      <LogoutButton />
      <Link to="/home" style={{ textDecoration: "none", color: "#FFF" }}>
        <button className="back">Back</button>
      </Link>
      <form>
        <input
          name="name"
          placeholder="Recipient's Name"
          required
          onChange={(e) => {
            setRequirements((requirements) => ({
              ...requirements,
              name: e.target.value,
            }));
          }}
        />
        <input name="age" placeholder="Recipient's Age" required />
        <select name="budget" required>
          <option value="" disabled selected>
            What is your budget? (CAD)
          </option>
          <option value="50">&lt; $50</option>
          <option value="100">$50-$100</option>
          <option value="200">$100-$200</option>
          <option value="500">$200-$500</option>
          <option value="">&gt; $500</option>
        </select>
        <input
          name="pinterest"
          placeholder="Recipient's Pinterest username (if applicable)"
        />
      </form>
      <Link to="/choices" style={{ textDecoration: "none", color: "#FFF" }}>
        <button className="submit">Submit</button>
      </Link>
    </div>
  );
}

export default Requirements;
