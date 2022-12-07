import prisma from "../prisma";

import { Request, Response } from "express";

class QuizController {
  static async getquizs(req: Request, res: Response) {
    try {
      const quizs = await prisma.quiz.findMany({
        include: {
          category: {
            include: {
              questions: true,
            },
          },
          questions: true,
        },
      });
      res.json({ quizs });
    } catch (error) {
      if (error) throw error;
    }
  }

  static async updateQuiz(req: Request, res: Response) {
    try {
      const quizs = await prisma.quiz.update({
        where: {
          id: Number(req.params.id),
        },
        data: req.body,
      });

      console.log({ quizs });

      res.json("Updates successfully");
    } catch (error) {
      console.log(`error is ${error}`);
      throw error;
    }
  }

  //   create a quizs

  static async createQuiz(req: Request, res: Response) {
    try {
      const quiz = await prisma.quiz.create({
        data: req.body,
      });

      res.json({ quiz });
    } catch (err) {
      console.log(`error is ${err}`);
    }
  }

  // delete a quizs by id "/quizs/:id"

  static async deletequiz(req: Request, res: Response) {
    try {
      await prisma.quiz.delete({
        where: {
          id: Number(req.params.id),
        },
      });

      res.json("Deleted successfully");
    } catch (error) {
      console.log(`error is ${error}`);
    }
  }

  // "/quizs/:id",

  static async getQuizById(req: Request, res: Response) {
    try {
      const quizs = await prisma.quiz.findUnique({
        where: {
          id: Number(req.params.id),
        },
      });

      res.json({ quizs });
    } catch (error) {
      console.log(`error is ${error}`);
    }
  }
}
export default QuizController;
