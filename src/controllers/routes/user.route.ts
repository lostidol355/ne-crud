import UserController from "../user.controller";
const express = require("express");
const router = express.Router();

router.get("/users", UserController.getUsers);

router.get("/users/:id", UserController.getUserById);

router.delete("/user/:userId", UserController.deleteUser);

module.exports = router;
