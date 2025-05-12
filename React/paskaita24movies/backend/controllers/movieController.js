import {
  getAllMovies,
  getMovieById,
  searchMoviesByTitle,
  createMovieInDb,
  getTotalMoviesCount,
} from '../models/movieModel.js';

export async function listMovies(req, res) {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const search = req.query.search || '';
  const offset = (page - 1) * limit;

  try {
    let movies;
    if (search) {
      movies = await searchMoviesByTitle(search);
    } else {
      movies = await getAllMovies(limit, offset);
    }

    const totalCount = await getTotalMoviesCount();

    res.set('X-Total-Count', totalCount);
    res.json({ movies, totalCount });    
  } catch (err) {
    console.error('Error in listMovies:', err);
    res.status(500).json({ error: 'Failed to fetch movies' });
  }
}

export async function getMovieDetails(req, res) {
  const { id } = req.params;
  try {
    const movie = await getMovieById(id);
    if (!movie) return res.status(404).json({ error: 'Movie not found' });
    res.json(movie);
  } catch (err) {
    console.error('Error in getMovieDetails:', err);
    res.status(500).json({ error: 'Failed to fetch movie details' });
  }
}

export async function createMovie(req, res) {
  const { name, description, poster, rating } = req.body;

  try {
    const newMovie = await createMovieInDb(name, description, poster, rating);
    res.status(201).json(newMovie);
  } catch (err) {
    console.error('Error in createMovie:', err);
    res.status(500).json({ error: 'Failed to create movie' });
  }
}