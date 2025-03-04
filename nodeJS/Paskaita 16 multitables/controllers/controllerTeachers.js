import client from "../db/db.js";

export async function getAllTeachers(req, res) {
    const { name } = req.query;

    let query = "select id, name from teachers";
try {
    const { rows } = await client.query(query);
    res.json(rows);
} catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}

export async function createNewTeacher(req, res) {
    const { name } = req.body;

    try {
        const { rows } = await client.query(
            `
            insert into teachers (name) 
            values ('${name}')
            returning id, name
            `,    
        );

        res.json(rows); 
    } catch (error) {
        console.error("Error creating new teacher:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

export async function getTeacherAndCoursesById(req, res) {
    const { id } = req.params;
    try {
    const {rows} = await client.query(`
        select * from teachers 
        join courses on teachers.id=courses.teacher_id 
        where courses.teacher_id=${id}`);
    if (rows.length === 0) {
        return res.status(404).json({ error: "Teacher not found" });
    }

    res.json(rows); 
} catch (error) {
    console.error("Error fetching teacher:", error);
    res.status(500).json({ error: "Internal server error" });
}
}

export async function updateTeacherById(req, res) {
    const { id } = req.params;
    const { name } = req.body;

    try {
        const { rows } = await client.query(`
            update teachers
            set name='${name}'
            where id=${id}
            returning id, name
            `);
            res.json(rows[0]); 
} catch (error) {
    console.error("Error fetching teacher:", error);
    res.status(500).json({ error: "Internal server error" });
}
}

export async function deleteTeacherById(req, res) {
    const { id } = req.params;
    const { name } = req.body;
    try {
        const updateCourses = await client.query(
            `UPDATE courses
             SET teacher_id = NULL
             WHERE teacher_id = ${id}`
        );

    const {rows} = await client.query(` 
        delete from teachers where id=${id}
        returning id, name `);

    res.json(rows[0]); 
} catch (error) {
    console.error("Error deleting course:", error);
    res.status(500).json({ error: "Internal server error" });
}
}