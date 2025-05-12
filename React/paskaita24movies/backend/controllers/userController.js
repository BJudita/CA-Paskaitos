import { getReviewsByUser } from '../models/reviewModel.js';

export async function getMyReviews(req, res) {
    const userId = req.user.id;
    try {
      const reviews = await getReviewsByUser(userId);
      res.json(reviews);
    } catch (err) {
      console.error("Error in getMyReviews:", err); // Add this
      res.status(500).json({ error: "Failed to fetch your reviews" });
    }
  }
  
