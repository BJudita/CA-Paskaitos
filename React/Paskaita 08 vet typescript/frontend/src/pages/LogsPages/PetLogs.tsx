import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./PetLogs.module.css";

interface Log {
  id: number;
  description: string;
  status: string;
  created_at: string;
}
interface Prescription {
  id: number;
  medication_name: string;
  comment: string;
  timestamp: string;
}


export default function PetLogs() {
  const { id } = useParams<{ id: string}>(); 
  const [logs, setLogs] = useState<Log[]>([]);
  const [prescriptions, setPrescriptions] = useState<Prescription[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [filter, setFilter] = useState<"all" | "logs" | "prescriptions">("all"); 
  const [error, setError] = useState<string | null>(null); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const logResponse = await axios.get(`http://localhost:3000/logs/${id}`);
        console.log("Logs:", logResponse.data);
        setLogs(logResponse.data);
  
        const prescriptionResponse = await axios.get(`http://localhost:3000/prescriptions/${id}`);
        console.log("Prescriptions:", prescriptionResponse.data); 
        setPrescriptions(prescriptionResponse.data);
      } catch (err: any) {
        setError(err.message); 
        console.error("Error fetching logs and prescriptions:", err);
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, [id]); 
  


  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>; 
  }

  return (
    <div className={styles.innerBody}>
      <h1 className={styles.title}>Pet Logs & Prescriptions</h1>
      
      {/* Filter buttons */}
      <div className={styles.filterButtons}>
        <button onClick={() => setFilter('logs')} className={styles.filterButton}>Logs</button>
        <button onClick={() => setFilter('prescriptions')} className={styles.filterButton}>Prescriptions</button>
        <button onClick={() => setFilter('all')} className={styles.filterButton}>All</button>
      </div>

      {/* Filtered logs */}
      {filter === 'all' || filter === 'logs' ? (
        <div>
          <h2 className={styles.subtitle}>Logs</h2>
          <div className={styles.container}>
            {logs.length > 0 ? (
              logs.map((log) => (
                <div key={log.id} className={styles.logBox}>
                  <strong>Description:</strong> {log.description} <br />
                  <strong>Status:</strong> {log.status} <br />
                  <strong>Created At:</strong> {new Date(log.created_at).toLocaleString()} {/* Format created_at date */}
                </div>
              ))
            ) : (
              <p>No logs available.</p>
            )}
          </div>
        </div>
      ) : null}

      {/* Filtered prescriptions */}
      {filter === 'all' || filter === 'prescriptions' ? (
        <div>
          <h2 className={styles.subtitle}>Prescriptions</h2>
          <div className={styles.container}>
            {prescriptions.length > 0 ? (
              prescriptions.map((prescription) => (
                <div key={prescription.id} className={styles.prescriptionBox}>
                  <strong>Medication:</strong> {prescription.medication_name} <br />
                  <strong>Comment:</strong> {prescription.comment} <br />
                  <strong>Timestamp:</strong> {new Date(prescription.timestamp).toLocaleString()} {/* Format timestamp */}
                </div>
              ))
            ) : (
              <p>No prescriptions available.</p>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}