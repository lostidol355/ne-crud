import { Router } from "express";
import QuizController from "../controllers/Quiz.controller";

const QuizRouter = Router();

QuizRouter.get("/", QuizController.getquizs);
QuizRouter.get("/:id", QuizController.getQuizById);
QuizRouter.post("/", QuizController.createQuiz);
QuizRouter.patch("/:id", QuizController.updateQuiz);
QuizRouter.delete("/:id", QuizController.deletequiz);

export default QuizRouter;
