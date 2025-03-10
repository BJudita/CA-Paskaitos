import { useEffect, useState } from "react";
import styles from "./MedicationList.module.css";
import { Link } from 'react-router-dom';
import axios from "axios";


const API_URL = "http://localhost:3000/medications";


export default function MedicationList() {
    const [medications, setMedications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); 
  
    useEffect(() => {
      fetchMedications();
    }, []);
  
    const fetchMedications = async () => {
      try {
        const response = await axios.get(API_URL); 
        setMedications(response.data);
      } catch (error) {
        console.error("Error fetching medications:", error);
        setError(error.message || "Failed to fetch medications");
      } finally {
        setLoading(false);
      }
    };
  
    if (loading) return <p>Loading medications...</p>;
    if (error) return <p>Error: {error}</p>;
  
  
    return (
      <div className={styles.innerBody}>
         <Link to="/medications/new">
        <button className={styles.addMedButton}>Add Med</button>
      </Link>  
        <h1 className={styles.title}>Medications</h1>
        {loading ? (
          <p>Loading medications...</p>
        ) : (
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
        )}
      </div>
    );
  }