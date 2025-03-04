import Joi from "joi";
import client from "../db/db.js";

export async function getAllCourses(req, res) {
    const { name } = req.query;

    let query = "select id, course_name from courses";
try {
    const { rows } = await client.query(query);
    res.json(rows);
} catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}

export async function createNewCourse(req, res) {
    const { course_name, teacher_id } = req.body;

const courseSchema = Joi.object({
    course_name: Joi.string().min(3).max(100).required(),
    teacher_id: Joi.number().integer().positive().required()
});

const { error } = courseSchema.validate({ course_name, teacher_id });


    try {
const teacherCheck = await client.query(
    `select id from teachers where id = ${teacher_id}`,
);
if (teacherCheck.rows.length === 0) {
    return res.status(400).json({ error: "Invalid teacher_id: Teacher does not exist" });
}

        const { rows } = await client.query(
            `
            insert into courses (course_name, teacher_id) 
            values ('${course_name}', ${teacher_id})
            returning id, course_name, teacher_id
            `,    
        );

        res.json(rows[0]); 
    } catch (error) {
        console.error("Error creating new course:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

export async function getCourseWithTeacherById(req, res) {
    const { id } = req.params;
    try {
    const {rows} = await client.query(
        `select courses.id as course_id, courses.course_name, teachers.id as teacher_id, teachers.name as teacher_name
         from courses
         inner join teachers on courses.teacher_id = teachers.id 
         where courses.id=${id}
         `);
    if (rows.length === 0) {
        return res.status(404).json({ error: "Course not found" });
    }

    res.json(rows[0]); 
} catch (error) {
    console.error("Error fetching course:", error);
    res.status(500).json({ error: "Internal server error" });
}
}

export async function updateCourseById(req, res) {
    const { id } = req.params;
    const { course_name, teacher_id } = req.body;

    try {
        const { rows } = await client.query(`
            update courses
            set course_name='${course_name}', teacher_id=${id}
            where id=${id}
            returning id, course_name, teacher_id
            `);
            res.json(rows[0]); 
} catch (error) {
    console.error("Error fetching course:", error);
    res.status(500).json({ error: "Internal server error" });
}
}

export async function deleteCourseById(req, res) {
    const { id } = req.params;
    const { course_name } = req.body;
    try {
    const {rows} = await client.query(` delete from courses where id=${id}
        returning id, course_name `);

    res.json(rows[0]); 
} catch (error) {
    console.error("Error deleting course:", error);
    res.status(500).json({ error: "Internal server error" });
}
}