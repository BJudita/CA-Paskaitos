import express from "express";
import { createNewTeacher, deleteTeacherById, getAllTeachers, getTeacherAndCoursesById, updateTeacherById } from "./controllers/controllerTeachers.js";
import { createNewCourse, deleteCourseById, getAllCourses, getCourseWithTeacherById, updateCourseById } from "./controllers/controllersCourses.js";

const router = express.Router();

router.get("/teachers", getAllTeachers)
router.post("/teachers", createNewTeacher)
router.get("/teachers/:id", getTeacherAndCoursesById)

router.get("/courses", getAllCourses)
router.post("/courses", createNewCourse)
router.get("/courses/:id", getCourseWithTeacherById)

router.put("/teachers/:id", updateTeacherById)
router.put("/courses/:id", updateCourseById)

router.delete("/teachers/:id", deleteTeacherById)
router.delete("/courses/:id", deleteCourseById)

export default router;