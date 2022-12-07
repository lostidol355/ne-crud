import { Router } from "express";
import StudentController from "../controllers/student.controller";

const studentRouter = Router();

studentRouter.get("/", StudentController.getStudents);
studentRouter.get("/:id", StudentController.getStudenById);
studentRouter.post("/", StudentController.createStudent);
studentRouter.patch("/:id", StudentController.updateStudent);
studentRouter.delete("/:id", StudentController.deleteStudent);

export default studentRouter;
