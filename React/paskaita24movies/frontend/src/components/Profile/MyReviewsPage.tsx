import { useEffect, useState } from "react";
import axios from "axios";
import ReviewItem from "../Review/ReviewItem";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import styles from "./MyReviewsPage.module.css"

interface Review {
  id: number;
  content: string;
  rating: number;
  movie_title: string;
  created_at: string;
  movie_id: number;
}

export default function MyReviewsPage() {
  const { user } = useAuth();
  const [reviews, setReviews] = useState<Review[]>([]);

  const fetchReviews = () => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:5000/api/users/me/reviews", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setReviews(res.data))
      .catch(() => setReviews([]));
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <div className={styles.reviewList}>
      <h2>My Reviews</h2>
      <div >
      {reviews.length === 0 ? (
        <p>You haven't written any reviews yet.</p>
      ) : (
        reviews.map((review) => (
          <div key={review.id}>
            <p><strong>Movie:</strong><Link to={`/movies/${review.movie_id}`}> {review.movie_title}</Link></p>
            <ReviewItem review={review} onUpdate={fetchReviews} />
            <hr />
          </div>
         ))
      )} 
      </div>
    </div>
  );
}
