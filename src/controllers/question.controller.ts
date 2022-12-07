import prisma from "../prisma";

import { Request, Response } from "express";

class QuestionController {
  static async getquestions(req: Request, res: Response) {
    try {
      const questions = await prisma.question.findMany({});
      res.json({ questions });
    } catch (error) {
      if (error) throw error;
    }
  }

  static async updateQuestion(req: Request, res: Response) {
    try {
      const questions = await prisma.question.update({
        where: {
          id: Number(req.params.id),
        },
        data: req.body,
      });

      console.log({ questions });

      res.json("Updates successfully");
    } catch (error) {
      console.log(`error is ${error}`);
      throw error;
    }
  }

  //   create a questions

  static async createQuestion(req: Request, res: Response) {
    try {
      const question = await prisma.question.create({
        data: 
        
          req.body,
        
      });

      res.json({ question });
    } catch (err) {
      console.log(`error is ${err}`);
    }
  }

  // delete a questions by id "/questions/:id"

  static async deleteQuestion(req: Request, res: Response) {
    try {
      await prisma.question.delete({
        where: {
          id: Number(req.params.id),
        },
      });

      res.json("Deleted successfully");
    } catch (error) {
      console.log(`error is ${error}`);
    }
  }

  // "/questions/:id",

  static async getQuestionById(req: Request, res: Response) {
    try {
      const questions = await prisma.question.findUnique({
        where: {
          id: Number(req.params.id),
        },
      });

      res.json({ questions });
    } catch (error) {
      console.log(`error is ${error}`);
    }
  }
}
export default QuestionController;
