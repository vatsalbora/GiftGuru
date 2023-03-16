import React, { useState, useContext } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import LogoutButton from "./logout.js";
import { RequirementsContext } from "../App";

function Requirements() {
  const { requirements, setRequirements } = useContext(RequirementsContext);

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    budget: "",
    pinterest: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!formData.name) {
      errors.name = "Name is required";
    } else if (!/^[a-zA-Z ]{2,50}$/.test(formData.name)) {
      errors.name = "Invalid name";
    }
    if (!formData.age) {
      errors.age = "Age is required";
    } else if (!/^(?:1[0-4][0-9]|[0-9]{1,2})$|^(?:150)$/.test(formData.age)) {
      errors.age = "Invalid age";
    }
    if (!formData.budget) {
      errors.budget = "Budget is required";
    }
    if (!/^(?!^\d+$)[a-zA-Z0-9_]{3,30}$|^$/.test(formData.pinterest)) {
      errors.pinterest = "Invalid Pinterest username";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    console.log("Test");
    event.preventDefault();
    if (validateForm()) {
      // submit the form data to the server
    }
  };

  const handleInputChangeName = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setRequirements((requirements) => ({
      ...requirements,
      name: event.target.value,
    }));
  };

  const handleInputChangeAge = (event) => {
    const { age, value } = event.target;
    setFormData({ ...formData, [age]: value });
    setRequirements((requirements) => ({
      ...requirements,
      age: event.target.value,
    }));
  };
  
  const handleInputChangeBudget = (event) => {
    const { budget, value } = event.target;
    setFormData({ ...formData, [budget]: value });
    setRequirements((requirements) => ({
      ...requirements,
      budget: event.target.value,
    }));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRequirements((requirements) => ({
      ...requirements,
      [name]: value,
    }));
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="page">
      <h1>GiftGuru</h1>
      <LogoutButton />
      <Link to="/home" style={{ textDecoration: "none", color: "#FFF" }}>
        <button className="back">Back</button>
      </Link>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Recipient's Name"
          required
          value={formData.name}
          onChange={handleInputChange}
        />
        {formErrors.name && <span>{formErrors.name}</span>}
        <input
          name="age"
          placeholder="Recipient's Age"
          required
          value={formData.age}
          onChange={handleInputChange}
        />
        {formErrors.age && <span>{formErrors.age}</span>}
        <select
          name="budget"
          required
          value={formData.budget}
          onChange={handleInputChange}
        >
          <option value="" disabled selected>
            What is your budget? (CAD)
          </option>
          <option value="50">&lt; $50</option>
          <option value="100">$50-$100</option>
          <option value="200">$100-$200</option>
          <option value="500">$200-$500</option>
          <option value="">&gt; $500</option>
        </select>
        {formErrors.budget && <span>{formErrors.budget}</span>}
        <input
          name="pinterest"
          placeholder="Recipient's Pinterest username (if applicable)"
          value={formData.pinterest}
          onChange={handleInputChange}
        />
        {formErrors.pinterest && <span>{formErrors.pinterest}</span>}
      </form>
      <Link to="/choices" style={{ textDecoration: "none", color: "#FFF" }}>
        {/* <button type="submit" disabled={!validateForm()}> */}
        <button type="submit" className="submit">
          Submit
        </button>
      </Link>
    </div>
  );
}

export default Requirements;
