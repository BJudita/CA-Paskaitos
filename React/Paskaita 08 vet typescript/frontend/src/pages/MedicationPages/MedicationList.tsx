import { useEffect, useState } from "react";
import styles from "./MedicationList.module.css";
import axios from "axios";
import AddMedForm from "./MedicationForm";

const API_URL = "http://localhost:3000/medications";

interface Med {
  id: number;
  name: string;
  description: string;
}

interface Error {
  message: string;
}

export default function MedicationList() {
  const [medications, setMedications] = useState<Med[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [showAddMedForm, setShowAddMedForm] = useState(false);  // State for form visibility

  useEffect(() => {
    fetchMedications();
  }, []);

  const fetchMedications = async () => {
    try {
      const response = await axios.get<Med[]>(API_URL); 
      setMedications(response.data);
    } catch (error: any) {
      console.error("Error fetching medications:", error);
      setError(error.message || "Failed to fetch medications");
    } finally {
      setLoading(false);
    }
  };

  const addMedication = (med: Med) => {
    setMedications((prevMedications) => [...prevMedications, med]);
    setShowAddMedForm(false);  
  };

  if (loading) return <p>Loading medications...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={styles.innerBody}>
      <button
        className={styles.addMedButton}
        onClick={() => setShowAddMedForm(!showAddMedForm)} 
      >
        {showAddMedForm ? "Cancel" : "Add Med"}
      </button>

      {showAddMedForm && <AddMedForm addMedication={addMedication} />}

      <h1 className={styles.title}>Medications</h1>

      <div className={styles.container}>
        {medications.map((medication) => (
          <div key={medication.id} className={styles.medBox}>
            <h2 className={styles.medName}>{medication.name}</h2>
            <p>
              <strong>Description:</strong> {medication.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
