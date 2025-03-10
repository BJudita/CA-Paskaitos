import express from "express";
import { assignProjectToEmployee, createNewEmployee, getAllEmployees, removeEmployeeFromProject } from "./controllers/employeesController.js";
import { createNewProject, getAllProjects, getAllProjectsAndAssignedEmployees } from "./controllers/projectsController.js";

const router = express.Router();

router.get("/employees", getAllEmployees)
router.post("/employees", createNewEmployee)
router.post("/employees/:employeeId/assign/:projectId",	assignProjectToEmployee)
router.delete("/employees/:employeeId/remove/:projectId", removeEmployeeFromProject)

router.get("/projects", getAllProjectsAndAssignedEmployees)
router.post("/projects", createNewProject)

export default router;