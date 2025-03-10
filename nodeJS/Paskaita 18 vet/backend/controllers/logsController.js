import client from "../db/db.js";

export async function getPetLogs(req, res) {
    const { pet_id } = req.params;

    try {
        const { rows } = await client.query(
            `
            select logs.*, pets.name as pet_name, pets.dob as pet_dob, pets.client_email 
            from logs 
            left join pets on pets.id = logs.pet_id
            where logs.pet_id = ${pet_id}
            `,    
        );

        res.json(rows); 
    } catch (error) {
        console.error("Error loading pet logs:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

export async function createNewLog(req, res) {
    const { pet_id, description, status } = req.body;

    try {
        const { rows } = await client.query(
            `
            insert into logs (pet_id, description, status) 
            values (${pet_id}, '${description}', '${status}')
            returning id, pet_id, description, status, created_at
            `,    
        );

        res.json(rows); 
    } catch (error) {
        console.error("Error creating new log:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}