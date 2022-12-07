import prisma from "../prisma";

import { Request, Response } from "express";

class CategoryController {
  static async getcategorys(req: Request, res: Response) {
    try {
      const categorys = await prisma.category.findMany({
        include: {
          questions: true,
          quiz: true,
        },
      });
      res.json({ categorys });
    } catch (error) {
      if (error) throw error;
    }
  }

  static async updatecategory(req: Request, res: Response) {
    try {
      const categorys = await prisma.category.update({
        where: {
          id: Number(req.params.id),
        },
        data: req.body,
      });

      console.log({ categorys });

      res.json("Updates successfully");
    } catch (error) {
      console.log(`error is ${error}`);
      throw error;
    }
  }

  //   create a categorys

  static async createcategory(req: Request, res: Response) {
    try {
      const category = await prisma.category.create({
        data: req.body,
      });

      res.json({ category });
    } catch (err) {
      console.log(`error is ${err}`);
    }
  }

  // delete a categorys by id "/categorys/:id"

  static async deletecategory(req: Request, res: Response) {
    try {
      await prisma.category.delete({
        where: {
          id: Number(req.params.id),
        },
      });

      res.json("Deleted successfully");
    } catch (error) {
      console.log(`error is ${error}`);
    }
  }

  // "/categorys/:id",

  static async getcategoryById(req: Request, res: Response) {
    try {
      const categorys = await prisma.category.findUnique({
        where: {
          id: Number(req.params.id),
        },
      });

      res.json({ categorys });
    } catch (error) {
      console.log(`error is ${error}`);
    }
  }
}
export default CategoryController;
