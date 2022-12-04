import dotenv from "dotenv";
import express from "express";
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const swaggerUi = require("swagger-ui-express"),
  swaggerDocument = require("../swagger-output.json");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const userRoute = require("../routes/user.route");
const studentRoute = require("../routes/student.route");
app.get("/", async (req, res) => {
  res.send(
    " it is working fine go to /users to see the users and /students to see the students"
  );
});

app.use("/", userRoute);
app.use("/student", studentRoute);

app.listen(port, () => {
  console.log(`app listening on http://localhost:${port}`);
});
