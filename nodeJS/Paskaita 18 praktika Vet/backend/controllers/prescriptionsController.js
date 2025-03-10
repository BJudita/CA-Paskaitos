import client from "../../db/db.js";

export async function getPetPrescriptions(req, res) {
    const { pet_id } = req.params;

    try {
        const { rows } = await client.query(
            `
            select prescriptions.*, pets.name as pet_name, pets.dob as pet_dob, pets.client_email,
                   medications.name as medication_name, medications.description as medication_description
            from prescriptions
            left join pets on pets.id = prescriptions.pet_id
            left join medications on medications.id = prescriptions.medication_id
            where prescriptions.pet_id = ${pet_id}
            `,    
        );

        res.json(rows); 
    } catch (error) {
        console.error("Error loading pet prescriptions:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

export async function createNewPrescription(req, res) {
    const { medication_id, pet_id, comment } = req.body;

    try {
        const { rows } = await client.query(
            `
            insert into prescriptions (medication_id, pet_id, comment) 
            values (${medication_id}, ${pet_id}, '${comment}')
            returning id, medication_id, pet_id, comment, timestamp
            `,    
        );

        res.json(rows); 
    } catch (error) {
        console.error("Error creating new prescription:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}