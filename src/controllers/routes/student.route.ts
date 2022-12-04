import { Router } from "express";
import StudentController from "../student.controller";

const studentRouter = Router();

studentRouter.get("/", StudentController.getStudents);
studentRouter.get("/:id", StudentController.getStudenById);
studentRouter.post("/", StudentController.createStudent);
studentRouter.patch("/:id", StudentController.updateStudent);
studentRouter.delete("/:id", StudentController.deleteStudent);

module.exports = studentRouter;
