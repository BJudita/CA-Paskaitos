import client from "../db/db.js";

export async function getMedications(req, res) {
    const { name, description } = req.query;

    let query = "select id, name, description from medications";

    try {
        const { rows } = await client.query(query);
        res.json(rows);
    }  catch (error) {
        res.status(500).json({ error: "Internal server error" });
      }
    }

    export async function createNewMedication(req, res) {
        const { name, description } = req.body;
    
        try {
            const { rows } = await client.query(
                `
                insert into medications (name, description) 
                values ('${name}', '${description}')
                returning id, name, description
                `,    
            );
    
            res.json(rows[0]); 
        } catch (error) {
            console.error("Error creating new medication:", error);
            res.status(500).json({ error: "Internal server error" });
        }
    }