import express from 'express';
import { listMovies, getMovieDetails, createMovie } from '../controllers/movieController.js';

const router = express.Router();

router.get('/', listMovies);
router.get('/:id', getMovieDetails);
router.post('/', createMovie);

export default router;
