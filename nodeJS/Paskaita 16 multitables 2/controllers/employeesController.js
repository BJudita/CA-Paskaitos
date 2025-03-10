import client from "../db/db.js";

export async function getAllEmployees(req, res) {
    const { name, email } = req.query;

    let query = "select id, name, email from employees";

    try {
        const { rows } = await client.query(query);
        res.json(rows);
    }  catch (error) {
        res.status(500).json({ error: "Internal server error" });
      }
    }

    export async function createNewEmployee(req, res) {
        const { name, email } = req.body;
    
        try {
            const { rows } = await client.query(
                `
                insert into employees (name, email) 
                values ('${name}', '${email}')
                returning id, name, email
                `,    
            );
    
            res.json(rows); 
        } catch (error) {
            console.error("Error creating new employee:", error);
            res.status(500).json({ error: "Internal server error" });
        }
    }

    export async function assignProjectToEmployee(req, res) {
        const { employeeId, projectId } = req.params;
    
        try {
            const { rows } = await client.query(
                `
                insert into employee_project (employee_id, project_id) 
                values ('${employeeId}', '${projectId}')
                returning employee_id, project_id
                `,    
            );
    
            if (rows.length > 0) {
                res.json({
                    message: "Employee assigned to project successfully",
                    data: rows[0]
                });
            } else {
                res.status(400).json({ error: "Failed to assign employee to project" });
            }
        } catch (error) {
            console.error("Error creating new employee:", error);
            res.status(500).json({ error: "Internal server error" });
        }
    }

    export async function removeEmployeeFromProject(req, res) {
        const { employeeId, projectId } = req.params;
    
        try {
            const result = await client.query(
                `delete from employee_project 
                where employee_id = ${employeeId} and project_id = ${projectId} 
                returning *`
            );
    
            if (result.rowCount === 0) {
                return res.status(404).json({ error: "Employee is not assigned to this project or does not exist" });
            }
    
            res.json({ message: "Employee removed from project successfully" });
        } catch (error) {
            console.error("Error removing employee from project:", error);
            res.status(500).json({ error: "Internal server error" });
        }
    }