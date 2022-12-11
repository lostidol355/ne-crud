import { Router } from "express";
import {CategoryController} from  "../controllers";

const categoryRouter = Router();

categoryRouter.get("/", CategoryController.getcategorys);
categoryRouter.get("/:id", CategoryController.getcategoryById);
categoryRouter.post("/", CategoryController.createcategory);
categoryRouter.patch("/:id", CategoryController.updatecategory);
categoryRouter.delete("/:id", CategoryController.deletecategory);

export default categoryRouter;
