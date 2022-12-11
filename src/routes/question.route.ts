import { Router } from "express";
import {QuestionController} from "../controllers";

const questionRouter = Router();

questionRouter.get("/", QuestionController.getquestions);
questionRouter.get("/:id", QuestionController.getQuestionById);
questionRouter.post("/", QuestionController.createQuestion);
questionRouter.patch("/:id", QuestionController.updateQuestion);
questionRouter.delete("/:id", QuestionController.deleteQuestion);

export default questionRouter;
