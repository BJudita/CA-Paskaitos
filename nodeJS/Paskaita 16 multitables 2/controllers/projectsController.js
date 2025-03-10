import client from "../db/db.js";

export async function getAllProjects(req, res) {
    const { project_name } = req.query;

    let query = "select id, project_name from projects";

    try {
        const { rows } = await client.query(query);
        res.json(rows);
    }  catch (error) {
        res.status(500).json({ error: "Internal server error" });
      }
    }

    export async function createNewProject(req, res) {
        const { project_name } = req.body;
    
        try {
            const { rows } = await client.query(
                `
                insert into projects (project_name) 
                values ('${project_name}')
                returning id, project_name
                `,    
            );
    
            res.json(rows); 
        } catch (error) {
            console.error("Error creating new project:", error);
            res.status(500).json({ error: "Internal server error" });
        }
    }

    
    export async function getAllProjectsAndAssignedEmployees(req, res) {
        try {
        const {rows} = await client.query(`
            select * from projects 
            left join employee_project on projects.id = employee_project.project_id  
            left join employees on employee_project.employee_id = employees.id
            `);

        res.json(rows);
    } catch (error) {
        console.error("Error fetching projects and assigned employees:", error);
        res.status(500).json({ error: "Internal server error" });
    }
    }
