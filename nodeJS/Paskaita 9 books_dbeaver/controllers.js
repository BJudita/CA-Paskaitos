import client from "./db/db.js";

export async function getAllBooks(req, res) {
const result = await client.query("select * from books")

res.json(result.rows);
}

export async function createNewBook(req, res) {
    const { title, author, published_year} = req.body;
    if (!title || !author) {
        return res.status(400).json({ error: "title and author fields are required" });
    }

    try {
        const result = await client.query(
            "INSERT INTO books (title, author, published_year) VALUES ($1, $2, $3) RETURNING *",
            [title, author, published_year || null]
        );

        res.status(201).json(result.rows[0]); 
    } catch (error) {
        console.error("Error creating new book:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

export async function getBookById(req, res) {
    const { id } = req.params;
    try {
    const result = await client.query("SELECT * FROM books WHERE id = $1", [id])
    if (result.rows.length === 0) {
        return res.status(404).json({ error: "Book not found" });
    }

    res.json(result.rows[0]); 
} catch (error) {
    console.error("Error fetching book:", error);
    res.status(500).json({ error: "Internal server error" });
}
}