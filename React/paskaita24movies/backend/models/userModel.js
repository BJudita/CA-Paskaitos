import db from '../db/db.js'; // this is your pool
import bcrypt from 'bcrypt';

export async function createUser(email, password, name) {
  const hashedPassword = await bcrypt.hash(password, 10);
  const result = await db.query(
    `INSERT INTO users (email, password_hash, name)
     VALUES ($1, $2, $3) RETURNING id, email, name`,
    [email, hashedPassword, name]
  );
  return result.rows[0];
}

export async function getUserByEmail(email) {
  const result = await db.query(
    `SELECT * FROM users WHERE email = $1`,
    [email]
  );
  return result.rows[0];
}

export async function getUserById(id) {
  const result = await db.query(
    `SELECT id, email, name FROM users WHERE id = $1`,
    [id]
  );
  return result.rows[0];
}
