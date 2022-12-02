import { Request, Response } from "express";
import prisma from "../src/prisma";

class UserController {
  static async deleteUser(req: Request, res: Response) {
    await prisma.user.delete({
      where: {
        id: Number(req.params.userId),
      },
    });
    res.send(" deleted successfudlly");
  }

  static async getUserById(req: Request, res: Response) {
    try {
      const user = await prisma.user.findUnique({
        where: {
          id: Number(req.params.id),
        },
      });

      res.send({ user });
    } catch (error) {
      console.log(`error is ${error}`);
    }
  }

  static async getUsers(req: Request, res: Response) {
    try {
      const students = await prisma.user.findMany({
        include: {
          students: true,
        },
      });
      res.json({ students });
    } catch (error) {
      if (error) throw error;
    }
  }
}

export default UserController;
