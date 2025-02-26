import client from "./db/db.js";

export async function getAllCars(req, res) {
    const { maxYear, minYear, order, pageSize = 10, page = 1 } = req.query;

    let query = "select id, make, year, brand from cars";
  
    if (maxYear || minYear) {
      query += " where";
      if (maxYear) {
        query += ` year < ${maxYear}`;
      }
      if (maxYear && minYear) {
        query += ` and year > ${minYear}`;
      } else if (minYear) {
        query += ` year > ${minYear}`;
      }
    }
  
    if (order) {
      query += ` order by year ${order}`;
    }
  
    query += ` limit ${pageSize} offset ${pageSize * (page - 1)}`;
    console.log(query);
  
    try {
      const { rows } = await client.query(query);
  
      res.json(rows);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }

export async function createNewCar(req, res) {
    const { make, year, brand} = req.body;
    // if (!make || !year || !brand) {
    //     return res.status(400).json({ error: "title and author fields are required" });
    // }

    try {
        const { rows } = await client.query(
            `
            INSERT INTO cars (make, year, brand) 
            VALUES ('${make}', ${year}, '${brand}')
            returning id, make, brand, year
            `,    
        );

        res.json(rows); 
    } catch (error) {
        console.error("Error creating new car:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

export async function updateCarById(req, res) {
    const { id } = req.params;
    const { make, year, brand } = req.body;
    try {
    const {rows} = await client.query(`
        update cars 
        set make='${make}', year = ${year}, brand = '${brand}'
        where id=${id}
        returning id, make, year, brand
             `);

    res.json(rows[0]); 
} catch (error) {
    console.error("Error fetching car:", error);
    res.status(500).json({ error: "Internal server error" });
}
}
export async function deleteCarById(req, res) {
    const { id } = req.params;
    const { make, year, brand } = req.body;
    try {
    const {rows} = await client.query(` delete from cars where id=${id}
        returning id, make, year, brand `);

    res.json(rows[0]); 
} catch (error) {
    console.error("Error fetching car:", error);
    res.status(500).json({ error: "Internal server error" });
}
}

export async function getCarById(req, res) {
    const { id } = req.params;
    try {
    const {rows} = await client.query(`select id, make, year, brand from cars where id=${id}`);
    if (rows.length === 0) {
        return res.status(404).json({ error: "Car not found" });
    }

    res.json(rows[0]); 
} catch (error) {
    console.error("Error fetching car:", error);
    res.status(500).json({ error: "Internal server error" });
}
}