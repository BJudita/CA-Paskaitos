import { useState } from 'react';
import axios from "axios";
import styles from "./PetList.module.css";
import React from 'react';

const API_URL = "http://localhost:3000/pets";

interface AddPetFromProps {
  addPet: (pet: Pet) => void;
}

interface Pet {
  name: string;
  dob: string;
  client_email: string;
}

const AddPetForm = ({ addPet }: AddPetFromProps) => {
  const [formData, setFormData] = useState<Pet>({ name: "", dob: "", client_email: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(API_URL, formData);
      console.log("Pet added successfully:", response.data);
      
      // Call addPet function passed as a prop
      addPet(response.data);
      
      // Reset form fields
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
        /><br />
        <label htmlFor="dob">Date of birth</label><br />
        <input
          type="date"
          name="dob"
          placeholder="Date of birth"
          value={formData.dob}
          onChange={handleChange}
          required
        /><br />
        <label htmlFor="client_email">Email</label><br />
        <input
          type="text"
          name="client_email"
          placeholder="Email"
          value={formData.client_email}
          onChange={handleChange}
          required
        /><br />
        <button type="submit" className={styles.addPet}>Add Pet</button>
      </form>
    </div>
  );
};

export default AddPetForm;