import React, { useState, useEffect } from "react";
import { createUser, updateUser } from "../../api/userApi";
import styles from "./UserForm.module.css";
import type { User } from "../../types/User";
import { AxiosError } from "axios";

interface Props {
  onUserCreated: () => void;
  userToEdit?: User | null;
  onCancelEdit?: () => void;
}

const UserForm: React.FC<Props> = ({
  onUserCreated,
  userToEdit,
  onCancelEdit,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  useEffect(() => {
    if (userToEdit) {
      setName(userToEdit.name);
      setEmail(userToEdit.email);
      setBirthDate(userToEdit.birth_date.toString().substring(0, 10));
    } else {
      setName("");
      setEmail("");
      setBirthDate("");
    }
    setErrorMessage(null);
  }, [userToEdit]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (name.trim().length < 4) {
      setErrorMessage("Vardas turi būti bent 4-ių simbolių ilgio.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setErrorMessage("Įveskite galiojantį pašto adresą.");
      return;
    }

    const isDateFormat = /^\d{4}-\d{2}-\d{2}$/.test(birthDate);
    const isNumericAge = /^\d+$/.test(birthDate);

    if (
      !isDateFormat &&
      (!isNumericAge || Number(birthDate) < 1 || Number(birthDate) > 150)
    ) {
      setErrorMessage(
        "Prašome įvesti galiojančią gimimo datą (YYYY-MM-DD) arba amžių nuo 1 iki 150."
      );
      return;
    }

    try {
      if (userToEdit) {
        await updateUser(userToEdit.id!, {
          name,
          email,
          birth_date: birthDate,
        });
      } else {
        await createUser({ name, email, birth_date: birthDate });
      }

      setName("");
      setEmail("");
      setBirthDate("");
      setErrorMessage(null);
      setSuccessMessage(
        userToEdit
          ? "Vartotojas atnaujintas!"
          : "Vartotojas sukurtas sėkmingai!"
      );
      onUserCreated();
      if (onCancelEdit) onCancelEdit();
    } catch (err: unknown) {
      console.error("Submission error:", err);

      let message = "Nepavyko pridėti vartotojo.";

      if (err instanceof AxiosError && err.response) {
        message = err.response.data?.message || message;
      } else {
        message = "Įvyko klaida. Bandykite vėl.";
      }

      setErrorMessage(message);
    }
  };

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => setSuccessMessage(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2 className={styles.title}>
        {userToEdit ? "Redaguojamas vartotojas" : "Vartotojo registracija"}
      </h2>
      {errorMessage && <p className={styles.error}>{errorMessage}</p>}
      {successMessage && <p className={styles.success}>{successMessage}</p>}

      <label htmlFor="name">Pilnas vardas</label>
      <input
        id="name"
        placeholder="Jonas Jonaitis"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <label htmlFor="email">El. pašto adresas</label>
      <input
        id="email"
        placeholder="pavyzdys@gmail.com"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <label htmlFor="birthDate">Gimimo data</label>
      <input
        id="birthDate"
        placeholder="1999-09-09"
        value={birthDate}
        onChange={(e) => setBirthDate(e.target.value)}
        required
      />

      <button type="submit">{userToEdit ? "Atnaujinti" : "Sukurti"}</button>
      {userToEdit && (
        <button
          type="button"
          onClick={onCancelEdit}
          className={styles.cancelBtn}
        > Atšaukti </button>
      )}
    </form>
  );
};

export default UserForm;
