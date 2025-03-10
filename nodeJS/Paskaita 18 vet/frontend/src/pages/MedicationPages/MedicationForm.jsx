import { useState } from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
import styles from "./MedicationList.module.css"

const API_URL = "http://localhost:3000/medications";

const AddMedForm = ({ onMedAdded = () => {} }) => {
  const [formData, setFormData] = useState({ name: '', description: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
    const response = await axios.post(API_URL, formData); 
      console.log("Medication added successfully:", response.data);
      onMedAdded(response.data); 
      setFormData({ name: "", description: "" }); 
    } catch (error) {
      console.error("Error adding med:", error.response?.data || error.message);
    }
  };

  return (
    <div className={styles.innerBody}>
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label><br />
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      /> <br />
      <label htmlFor="description">Description</label><br />
      <input
        type="text"
        name="description"
        placeholder="description"
        value={formData.description}
        onChange={handleChange}
        required
      /> <br />
      <button type="submit" className={styles.addMed}>Add Med</button>
    </form>
    </div>
  );
};

AddMedForm.propTypes = {
  onMedAdded: PropTypes.func.isRequired,
};

export default AddMedForm;