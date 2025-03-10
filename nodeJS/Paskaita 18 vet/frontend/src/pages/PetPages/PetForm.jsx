import { useState } from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
import styles from "./PetList.module.css";

const API_URL = "http://localhost:3000/pets";

const AddPetForm = ({ onPetAdded = () => {} }) => {
  const [formData, setFormData] = useState({ name: '', dob: '', client_email: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
    const response = await axios.post(API_URL, formData); 
      console.log("Pet added successfully:", response.data);
      onPetAdded(response.data); 
      setFormData({ name: "", dob: "", client_email: "" }); 
    } catch (error) {
      console.error("Error adding pet:", error.response?.data || error.message);
    }
  };

  return (
    <div className={styles.innerBody}>
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">Pet name</label><br />
      <input
        type="text"
        name="name"
        placeholder="Pet Name"
        value={formData.name}
        onChange={handleChange}
        required
      /> <br />
      <label htmlFor="dob">Date of birth</label><br />
      <input
        type="date"
        name="dob"
        placeholder="date of birth"
        value={formData.dob}
        onChange={handleChange}
        required
      /> <br />
      <label htmlFor="client_email">Email</label><br />
       <input
        type="text"
        name="client_email"
        placeholder="email"
        value={formData.client_email}
        onChange={handleChange}
        required
      /> <br />
      <button type="submit" className={styles.addPet}>Add Pet</button>
    </form>
    </div>
  );
};

AddPetForm.propTypes = {
  onPetAdded: PropTypes.func.isRequired,
};

export default AddPetForm;