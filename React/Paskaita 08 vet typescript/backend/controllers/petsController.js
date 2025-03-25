import client from "../db/db.js";

export async function getPets(req, res) {
    const { name, dob, client_email } = req.query;

    let query = "select id, name, dob, client_email, isArchived from pets";

    try {
        const { rows } = await client.query(query);
        res.json(rows);
    }  catch (error) {
        res.status(500).json({ error: "Internal server error" });
      }
    }

    export async function createNewPet(req, res) {
        const { name, dob, client_email } = req.body;
    
        try {
            const { rows } = await client.query(
                `
                insert into pets (name, dob, client_email) 
                values ('${name}', '${dob}', '${client_email}')
                returning id, name, dob, client_email
                `,    
            );
    
            res.json(rows[0]); 
        } catch (error) {
            console.error("Error creating new pet:", error);
            res.status(500).json({ error: "Internal server error" });
        }
    }

    export async function updatePet(req, res) {
        const { id } = req.params;
    
        try {
            const result = await client.query(
                `update pets 
                set isArchived = true
                where id = ${id}
                returning *`
            );
    
            if (result.rowCount === 0) {
                return res.status(404).json({ error: "Pet not found" });
            }
            res.json({
                message: "Pet archived successfully",
                pet: {
                  ...result.rows[0],
                  isarchived: result.rows[0].isarchived 
                }
              });
        } catch (error) {
            console.error("Error removing employee from project:", error);
            res.status(500).json({ error: "Internal server error" });
        }
    }