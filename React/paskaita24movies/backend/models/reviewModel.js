import db from '../db/db.js';

export async function getMovieById(id) {
  const movieResult = await db.query(`SELECT * FROM movies WHERE id = $1`, [id]);
  const movie = movieResult.rows[0];

  if (!movie) return null;

  const ratingResult = await db.query(
    `SELECT AVG(rating)::numeric(10,2) AS avg_rating FROM reviews WHERE movie_id = $1`,
    [id]
  );

  movie.rating = ratingResult.rows[0].avg_rating || null;

  return movie;
}

export async function createReview(userId, movieId, content, rating) {
  const result = await db.query(
    `INSERT INTO reviews (user_id, movie_id, content, rating)
     VALUES ($1, $2, $3, $4)
     RETURNING *`,
    [userId, movieId, content, rating]
  );
  return result.rows[0];
}

export async function updateReview(reviewId, userId, content, rating) {
  const result = await db.query(
    `UPDATE reviews
     SET content = $1, rating = $2
     WHERE id = $3 AND user_id = $4
     RETURNING *`,
    [content, rating, reviewId, userId]
  );
  return result.rows[0];
}

export async function deleteReview(reviewId, userId) {
  await db.query(
    `DELETE FROM reviews
     WHERE id = $1 AND user_id = $2`,
    [reviewId, userId]
  );
}

export async function getReviewsByMovie(movieId, limit = 10, offset = 0) {
  const result = await db.query(
    `SELECT r.*, u.name AS reviewer_name
     FROM reviews r
     JOIN users u ON r.user_id = u.id
     WHERE movie_id = $1
     ORDER BY r.created_at DESC
     LIMIT $2 OFFSET $3`,
    [movieId, limit, offset]
  );
  return result.rows;
}

export async function getReviewByUserAndMovie(userId, movieId) {
  const result = await db.query(
    `SELECT * FROM reviews WHERE user_id = $1 AND movie_id = $2`,
    [userId, movieId]
  );
  return result.rows[0];
}
export async function getReviewsByUser(userId) {
  const result = await db.query(
    `SELECT r.*, m.name AS movie_title
     FROM reviews r
     LEFT JOIN movies m ON r.movie_id = m.id
     WHERE r.user_id = $1
     ORDER BY r.created_at DESC`,
    [userId]
  );
  return result.rows;
}
