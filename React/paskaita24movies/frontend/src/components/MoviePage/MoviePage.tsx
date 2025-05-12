import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import ReviewForm from "../Review/ReviewForm";
import ReviewItem from "../Review/ReviewItem";
import styles from "./MoviePage.module.css";

interface Review {
  id: number;
  user_name: string;
  content: string;
  rating: number;
  created_at: string;
  user_id: string;
}

interface Movie {
  id: number;
  name: string;
  description: string;
  poster: string;
  average_rating: number;
}

export default function MoviePage() {
  const { id } = useParams();
  const { user } = useAuth();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);

  const fetchMovie = async () => {
    const res = await axios.get(`http://localhost:5000/api/movies/${id}`);
    setMovie(res.data);
  };

  const fetchReviews = async () => {
    const res = await axios.get(`http://localhost:5000/api/reviews/movie/${id}`);
    setReviews(res.data);
  };

  useEffect(() => {
    fetchMovie();
    fetchReviews();
  }, [id]);

  const handleReviewAdded = () => {
    fetchReviews();  
    fetchMovie();   
  };
  

  if (!movie) return <p>Loading movie...</p>;

  return (

<div className={styles.movieContainer}>
     <h1>{movie.name}</h1>
     <div className={styles.movieInfoContainer}>
      <div className={styles.movieLeftBox}>
      <img src={movie.poster} alt={movie.name} />
      </div>
      <div className={styles.movieRightBox}>
      <p className={styles.rating}>⭐ {movie.average_rating ?? "No rating yet"}/5</p>
      <p className={styles.movieDescription}>{movie.description}</p>
      
      </div>
      </div>
      <div className={styles.movieRating}>
      <h2>Reviews</h2>
      {user && <ReviewForm movieId={movie.id} onReviewAdded={handleReviewAdded} />}
      {reviews.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        reviews.map((review) => (
          <ReviewItem key={review.id} review={review} onUpdate={handleReviewAdded} />
        ))
      )}
</div>
    </div>
  );
}
