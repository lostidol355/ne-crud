import dotenv from "dotenv";
import {
  userRouter,
  studentRouter,
  questionRouter,
  quizRouter,
  categoryRouter,
  resultRouter,
} from "./routes";
import express from "express";

const cors = require("cors");

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());

const swaggerUi = require("swagger-ui-express"),
  swaggerDocument = require("../swagger-output.json");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/", async (req, res) => {
  res.send(
    " it is working fine go to /users to see the users and /students to see the students"
  );
});

app.use("/users", userRouter);
app.use("/student", studentRouter);
app.use("/question", questionRouter);
app.use("/quiz", quizRouter);
app.use("/category", categoryRouter);
app.use("/result", resultRouter);

app.listen(port, () => {
  console.log(`app listening on http://localhost:${port}`);
});
