import UserController from "../controllers/user.controller";
const express = require("express");
const router = express.Router();

router.get("/", UserController.getUsers);

router.get("/:id", UserController.getUserById);

router.delete("/:userId", UserController.deleteUser);

export default router;
