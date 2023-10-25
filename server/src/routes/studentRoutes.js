import { Router } from "express";
import {
    createStudent,
    readStudents,
    readStudent,
    updateStudent,
    deleteStudent,
} from "../controllers/studentsController.js";

const router = Router();

router.post("/add-student", createStudent);
router.get("/students", readStudents);
router.get("/student/:id", readStudent);
router.put("/student/:id", updateStudent);
router.delete("/student/:id", deleteStudent);

export default router;
