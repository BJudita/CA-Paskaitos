import client from "./db/db.js";

    export async function getShirts(req, res) {
      const { order = "asc", limit, page = 1 } = req.query;
      const { size } = req.params;
  
      let query = "select id, brand, model, size, price from shirts";
      let pageSize = Number(limit) || 10;
      if (pageSize < 10) pageSize = 10;
      if (pageSize > 100) pageSize = 100;

      if (size) {
        query += ` where size = '${size}'`;
      }
  
        query += ` order by price ${order}`;
    
      query += ` limit ${pageSize} offset ${pageSize * (page - 1)}`;
      console.log(query);
    
      try {
        const { rows } = await client.query(query);
    
        res.json(rows);
      } catch (error) {
        res.status(500).json({ error: "Internal server error" });
      }
    }

export async function createNewShirt(req, res) {
    const { brand, model, size, price} = req.body;
    try {
        const { rows } = await client.query(
            `
            INSERT INTO shirts (brand, model, size, price) 
            VALUES ('${brand}', '${model}', '${size}', ${price})
            returning brand, model, size, price
            `,    
        );

        res.json(rows); 
    } catch (error) {
        console.error("Error creating new shirt:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}
