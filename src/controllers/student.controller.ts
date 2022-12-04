import prisma from "../prisma";

import { Request, Response } from "express";

class StudentController {
  static async getStudents(req: Request, res: Response) {
    try {
      const students = await prisma.student.findMany({});
      res.json({ students });
    } catch (error) {
      if (error) throw error;
    }
  }

  static async updateStudent(req: Request, res: Response) {
    try {
      const student = await prisma.student.update({
        where: {
          id: Number(req.params.id),
        },
        data: req.body,
      });

      console.log({ student });

      res.json("Updates successfully");
    } catch (error) {
      console.log(`error is ${error}`);
      throw error;
    }
  }

  //   create a student

  static async createStudent(req: Request, res: Response) {
    try {
      const post = await prisma.student.create({
        data: {
          userId: 1,
          ...req.body,
        },
      });

      res.json({ post });
    } catch (err) {
      console.log(`error is ${err}`);
    }
  }

  // delete a student by id "/students/:id"

  static async deleteStudent(req: Request, res: Response) {
    try {
      await prisma.student.delete({
        where: {
          id: Number(req.params.id),
        },
      });

      res.json("Deleted successfully");
    } catch (error) {
      console.log(`error is ${error}`);
    }
  }

  // "/students/:id",

  static async getStudenById(req: Request, res: Response) {
    try {
      const student = await prisma.student.findUnique({
        where: {
          id: Number(req.params.id),
        },
      });

      res.json({ student });
    } catch (error) {
      console.log(`error is ${error}`);
    }
  }
}
export default StudentController;
