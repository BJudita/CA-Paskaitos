import { useEffect, useRef, useState } from "react";
import styles from "./Timer.module.css"

export default function Timer() {
      
const [time, setTime] = useState(0); // Laikmatyje praėjęs laikas
const intervalRef = useRef(null); // Laikysime intervalo ID
const isRunning = useRef(false); // Stebėsime, ar laikmatis veikia

 // Funkcija, kuri pradeda laikmatį
 const startTimer =  () => {
    if (!isRunning.current) { // Patikriname, ar laikmatis jau veikia
isRunning.current = true;
intervalRef.current = setInterval(() => {
    setTime((prevTime) => prevTime + 1);// Kiekvieną sekundę pridedame 1 prie laikmatio
}, 1000); // Atnaujinimas kas 1000ms (1 sekundė)

    }
 };

 // Funkcija, kuri sustabdo laikmatį
 const pauseTimer = () => {
    if (isRunning.current) {
        clearInterval(intervalRef.current); // sustabdome intervala
        isRunning.current = false;
    }
 };
 // Funkcija, kuri atstato laikmatį
 const resetTimer = () => {
    clearInterval(intervalRef.current); // sustabdo intervala
    isRunning.current = false;
    setTime(0);
 };

 // Valome intervalą, kai komponentas yra pašalinamas (kad išvengtume atminties nutekėjimo)
 useEffect(() => {
 return () => {
    if (intervalRef.current) {
        clearInterval(intervalRef.current);
    }
};
 }, []);
 


    return (
        <div className={styles.timerContainer}>
            <h1>{time} sekundės</h1>
           <button onClick={startTimer}>Start</button>
           <button onClick={pauseTimer}>Pause</button>
           <button onClick={resetTimer}>Reset</button>
        </div>
    )
};
