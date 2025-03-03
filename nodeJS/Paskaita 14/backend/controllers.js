import client from "../db/db.js";

    export async function getItems(req, res) {
      const {  limit, page = 1 } = req.query;
      const { size } = req.params;
  
      let query = "select id, title from plist";
      let pageSize = Number(limit) || 10;
      if (pageSize < 10) pageSize = 10;
      if (pageSize > 100) pageSize = 100;
    
      query += ` limit ${pageSize} offset ${pageSize * (page - 1)}`;
      console.log(query);
    
      try {
        const { rows } = await client.query(query);
    
        res.json(rows);
      } catch (error) {
        res.status(500).json({ error: "Internal server error" });
      }
    }

export async function createNewItem(req, res) {
    const { title } = req.body;
    try {
        const { rows } = await client.query(
            `insert into plist (title) 
            values ('${title}')
            returning title
            `,    
        );
        res.json(rows[0]); 
    } catch (error) {
        console.error("Error creating new item:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}
export async function deleteItemById(req, res) {
    const { id } = req.params;
    const { title } = req.body;
    try {
    const {rows} = await client.query(` delete from plist where id=${id}
        returning id, title `);

    res.json(rows[0]); 
} catch (error) {
    console.error("Error fetching list:", error);
    res.status(500).json({ error: "Internal server error" });
}
}
