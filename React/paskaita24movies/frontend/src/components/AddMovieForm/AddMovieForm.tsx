// src/components/MovieList/AddMovieForm.tsx

import { useState } from "react";
import axios from "axios";
import styles from "./AddMovieForm.module.css";

interface Movie {
  id: number;
  name: string;
  description: string;
  poster: string;
  rating: number | null;
}

interface Props {
  addMovie: (movie: Movie) => void;
}

export default function AddMovieForm({ addMovie }: Props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState<number>(1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/movies", {
        name,
        description,
        poster,
        rating,
      });

      addMovie(response.data);
      setName("");
      setDescription("");
      setPoster("");
      setRating(1);
    } catch (error) {
      console.error("Failed to add movie:", error);
      alert("Could not add movie. Check your input or try again later.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        placeholder="Movie title"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <textarea
        placeholder="Movie description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Poster URL"
        value={poster}
        onChange={(e) => setPoster(e.target.value)}
        required
      />
      <input
        type="number"
        min={1}
        max={5}
        placeholder="Rating (1-5)"
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
        required
      />
      <button type="submit">Add Movie</button>
    </form>
  );
}
