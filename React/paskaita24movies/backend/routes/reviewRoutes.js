import express from 'express';
import {
  postReview,
  editReview,
  removeReview,
  getMovieReviews
} from '../controllers/reviewController.js';

import { authenticate } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/movie/:movieId', getMovieReviews);
router.post('/movie/:movieId', authenticate, postReview);
router.put('/:reviewId', authenticate, editReview);
router.delete('/:reviewId', authenticate, removeReview);

export default router;
