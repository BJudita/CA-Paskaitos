import express from "express";
import { createNewPet, getPets, updatePet } from "../controllers/petsController.js";
import { createNewMedication, getMedications } from "../controllers/medicationsController.js";
import { createNewLog, getPetLogs } from "../controllers/logsController.js";
import { createNewPrescription, getPetPrescriptions } from "../controllers/prescriptionsController.js";

const router = express.Router();

// PETS
router.get("/pets", getPets)
router.post("/pets", createNewPet)
router.patch("/pets/:id", updatePet)
// Medication
router.get("/medications", getMedications)
router.post("/medications", createNewMedication)
// Logs
router.get("/logs/:pet_id", getPetLogs)
router.post("/logs", createNewLog)
// Prescription
router.get("/prescriptions/:pet_id", getPetPrescriptions)
router.post("/prescriptions", createNewPrescription)

export default router;