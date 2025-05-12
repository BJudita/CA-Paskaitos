import { useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import styles from "./ReviewForm.module.css"

interface Props {
  movieId: number;
  onReviewAdded: () => void;
}

export default function ReviewForm({ movieId, onReviewAdded }: Props) {
  const [content, setContent] = useState("");
  const [rating, setRating] = useState(5);
  const { user } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    console.log("📦 Token being sent:", token);

    try {
      await axios.post(
        `http://localhost:5000/api/reviews/movie/${movieId}`,
        { content, rating },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setContent("");
      setRating(5);
      onReviewAdded();
    } catch (err) {
      alert("Failed to post review");
      console.error(err);
    }
  };

  if (!user) return null;

  return (
    <form onSubmit={handleSubmit}>
            <div className={styles.writeReview}>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write your review..."
        required
      />
      <div className={styles.reviewSubmit}>
      <select className={styles.points} value={rating} onChange={(e) => setRating(Number(e.target.value))}>
        {[1, 2, 3, 4, 5].map((num) => (
          <option key={num} value={num}>
            {num} star{num > 1 ? "s" : ""}
          </option>
        ))}
      </select>
      <br />
      <button className={styles.submit} type="submit">Submit</button>
    </div>
    </div>
    </form>
  );
}
