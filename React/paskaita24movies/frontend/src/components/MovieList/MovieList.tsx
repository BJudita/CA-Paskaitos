import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./MovieList.module.css";
import AddMovieForm from "../AddMovieForm/AddMovieForm";

const API_URL = "http://localhost:5000/";

interface Movie {
  id: number;
  name: string;
  // description: string;
  poster: string;
  average_rating: number | null;
}

interface Error {
  message: string;
}
interface MovieListProps {
  searchInput: string;
}

export default function MovieList({ searchInput }: MovieListProps) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [showAddMovieForm, setShowAddMovieForm] = useState(false);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  // const [searchInput, setSearchInput] = useState<string>(''); 
  // const [searchText, setSearchText] = useState<string>('');
  const limit = 5;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${API_URL}api/movies`, {
          params: {
            search: searchInput,
            page: page,
            limit: limit,
          },
        });

        console.log("Response data:", response.data);

        const { movies = [], totalCount = 0 } = response.data;

        if (Array.isArray(movies)) {
          setMovies(movies);
        } else {
          setMovies([]);
        }

        setTotalPages(Math.ceil(totalCount / limit));

      } catch (error: any) {
        console.error("Error fetching movies:", error);
        setError({ message: error.message || "Failed to fetch movies" });
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [page, searchInput]);

  // const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearchText(e.target.value);
  // };

  // const handleSearchSubmit = () => {
  //   setSearchInput(searchText);
  //   setPage(1);
  // };

  // const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
  //   if (e.key === "Enter") {
  //     handleSearchSubmit();
  //   }
  // };

  const handleNextPage = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const addMovie = (movie: Movie) => {
    setMovies((prevMovies) => [...prevMovies, movie]);
    setShowAddMovieForm(false);
  };

  if (loading) return <p>Loading movies...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className={styles.mainWrapper}>
    <div className={styles.innerBody}>
<div className={styles.titleBody}>
      <h1 className={styles.title}>Movie List</h1>
      <button
        className={styles.addMovieButton}
        onClick={() => setShowAddMovieForm(!showAddMovieForm)}
      >
        {showAddMovieForm ? "Cancel" : "Add Movie"}
      </button>

      {showAddMovieForm && <AddMovieForm addMovie={addMovie} />}
</div>
      {/* <div className={styles.searchContainer}>
        <input
          type="text"
          value={searchText}
          onChange={handleSearchChange}
          onKeyDown={handleKeyDown}
          placeholder="Search by title..."
          className={styles.searchInput}
        />
        <button onClick={handleSearchSubmit} className={styles.searchButton}>
          Search
        </button>
      </div> */}

      <div className={styles.container}>
      {movies.map((movie) => (
  <Link
    key={movie.id}
    to={`/movie/${movie.id}`}
    className={styles.movieLink} 
  >
    <div className={styles.movieBox}>
      <h2 className={styles.movieName}>{movie.name}</h2>
      <img
        src={movie.poster}
        alt={movie.name}
        className={styles.moviePoster}
      />
      {/* <p><strong>Description:</strong> {movie.description}</p> */}
      <p><strong>Rating:</strong> {movie.average_rating && movie.average_rating > 0 ? movie.average_rating : "No rating yet"}</p>

    </div>
  </Link>
))}

      </div>

      <div className={styles.pagination}>
        <button onClick={handlePrevPage} disabled={page === 1}>
          Prev
        </button>
        <span>
          Page {page} of {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={page === totalPages}>
          Next
        </button>
      </div>
    </div>
    </div>
  );
}
