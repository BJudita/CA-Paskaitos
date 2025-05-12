import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PetList.module.css";
import { Link } from 'react-router-dom';
import axios from "axios";
import AddPetForm from "./PetForm"; // Import AddPetForm here

const API_URL = "http://localhost:3000/movies";

interface Pet {
  id: number;
  name: string;
  dob: string;
  client_email: string;
  isarchived: boolean;
}

interface Error {
  message: string;
}

export default function PetList() {
  const [pets, setPets] = useState<Pet[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [showAddPetForm, setShowAddPetForm] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchPets();
  }, []); // Run on initial load to fetch pets

  const fetchPets = async () => {
    try {
      const response = await axios.get<Pet[]>(API_URL);
      setPets(response.data);
      console.log("Fetched pets:", response.data); // Debug to ensure pets are fetched correctly
    } catch (error: any) {
      console.error("Error fetching pets:", error);
      setError( error.message || "Failed to fetch pets");
    } finally {
      setLoading(false);
    }
  };

  const handleViewLogs = (petId: number) => {
    navigate(`/logs/pet/${petId}`);
  };

  const handleArchivePet = async (petId: number) => {
    console.log("Archiving pet with ID:", petId);
    try {
      const response = await axios.patch(`${API_URL}/${petId}`, {
        isarchived: true,
      });

      console.log("Pet archived successfully:", response.data);

      setPets((prevPets) =>
        prevPets.map((pet) =>
          pet.id === petId ? { ...pet, isarchived: response.data.pet.isarchived } : pet
        )
      );
    } catch (error: any) {
      console.error("Error archiving pet:", error.response?.data || error.message);
    }
  };

  const addPet = (pet: Pet) => {
    setPets((prevPets) => [...prevPets, pet]);
    setShowAddPetForm(false);
  };

  if (loading) return <p>Loading pets...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className={styles.innerBody}>
    <button
      className={styles.addPetButton}
      onClick={() => setShowAddPetForm(!showAddPetForm)}
    >
      {showAddPetForm ? "Cancel" : "Add Pet"}
    </button>

    {showAddPetForm && <AddPetForm addPet={addPet} />}

      <h1 className={styles.title}>Pets</h1>
      <div className={styles.container}>
        {pets.map((pet) => (
          <div key={pet.id} className={styles.petBox}>
            <h2 className={styles.petName}>{pet.name}</h2>
            <p>
              <strong>Date Of Birth:</strong> {new Date(pet.dob).toLocaleDateString()}
            </p>
            <p>
              <strong>Email:</strong> {pet.client_email}
            </p>
            <p>
              <strong>Archived:</strong> {pet.isarchived ? "Yes" : "No"}
            </p>
            <div className={styles.petButtons}>
              <button
                onClick={() => handleViewLogs(pet.id)}
                className={styles.logsButton}
                disabled={pet.isarchived}
              >
                View Log
              </button>
              <button
                onClick={() => handleArchivePet(pet.id)}
                className={styles.deleteButton}
                disabled={pet.isarchived}
              >
                {pet.isarchived ? "Archived" : "Archive"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
