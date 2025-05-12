import {
    createReview,
    updateReview,
    deleteReview,
    getReviewsByMovie,
    getReviewByUserAndMovie,
  } from '../models/reviewModel.js';
  
  export async function postReview(req, res) {
    const { movieId } = req.params;
    const { content, rating } = req.body;
    const userId = req.user.id;
  
    try {
      const existing = await getReviewByUserAndMovie(userId, movieId);
      if (existing) return res.status(400).json({ error: 'You already reviewed this movie' });
  
      const newReview = await createReview(userId, movieId, content, rating);
      res.status(201).json(newReview);
    } catch (err) {
      res.status(500).json({ error: 'Failed to post review' });
    }
  }
  
  
  export async function editReview(req, res) {
    const { reviewId } = req.params;
    const { content, rating } = req.body;
    const userId = req.user.id;
  
    try {
      const updated = await updateReview(reviewId, userId, content, rating);
      if (!updated) return res.status(403).json({ error: 'You cannot edit this review' });
  
      res.json(updated);
    } catch (err) {
      res.status(500).json({ error: 'Failed to update review' });
    }
  }
  
  export async function removeReview(req, res) {
    const { reviewId } = req.params;
    const userId = req.user.id;
  
    try {
      await deleteReview(reviewId, userId);
      res.json({ message: 'Review deleted' });
    } catch (err) {
      res.status(500).json({ error: 'Failed to delete review' });
    }
  }
  
  export async function getMovieReviews(req, res) {
    const { movieId } = req.params;
    const { page = 1, limit = 10 } = req.query;
    const offset = (page - 1) * limit;
  
    try {
      const reviews = await getReviewsByMovie(movieId, limit, offset);
      res.json(reviews);
    } catch (err) {
      res.status(500).json({ error: 'Failed to get reviews' });
    }
  }
  