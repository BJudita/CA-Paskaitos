import db from '../db/db.js';

export async function getAllMovies(limit = 10, offset = 0) {
  const result = await db.query(
    `SELECT m.*, 
            COALESCE(AVG(r.rating), 0)::numeric(2,1) AS average_rating
     FROM movies m
     LEFT JOIN reviews r ON m.id = r.movie_id
     GROUP BY m.id
     ORDER BY m.name
     LIMIT $1 OFFSET $2`,
    [limit, offset]
  );

  return result.rows;
}

export async function getMovieById(id) {
  const result = await db.query(
    `SELECT m.*, 
            COALESCE(AVG(r.rating), 0)::numeric(2,1) AS average_rating
     FROM movies m
     LEFT JOIN reviews r ON m.id = r.movie_id
     WHERE m.id = $1
     GROUP BY m.id`,
    [id]
  );
  return result.rows[0];
}

export async function searchMoviesByTitle(title) {
  const result = await db.query(
    `SELECT m.*, 
            COALESCE(AVG(r.rating), 0)::numeric(2,1) AS average_rating
     FROM movies m
     LEFT JOIN reviews r ON m.id = r.movie_id
     WHERE m.name ILIKE $1
     GROUP BY m.id
     ORDER BY m.name`,
    [`%${title}%`]
  );
  return result.rows;
}

// Helper function to get the total movie count for pagination
export async function getTotalMoviesCount() {
  const result = await db.query('SELECT COUNT(*) FROM movies');
  return parseInt(result.rows[0].count, 10);
}

// Function to create a new movie in the database
export async function createMovieInDb(name, description, poster, rating) {
  const result = await db.query(
    `INSERT INTO movies (name, description, poster, rating)
     VALUES ($1, $2, $3, $4)
     RETURNING *`,
    [name, description, poster, rating]
  );
  return result.rows[0]; // Returning the newly created movie
}
