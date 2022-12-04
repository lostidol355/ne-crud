const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    version: "1.0.0",
    title: "Student Crud API",
    description: "Api Documentation for Student Crud ",
  },
  host: "localhost:3005",
  basePath: "/",
  schemes: ["http", "https"],
  consumes: ["application/json"],
  produces: ["application/json"],
  tags: [
    {
      name: "User",
      description: "Endpoints",
    },
  ],
  securityDefinitions: {
    apiKeyAuth: {
      type: "apiKey",
      in: "header", // can be "header", "query" or "cookie"
      name: "X-API-KEY", // name of the header, query parameter or cookie
      description: "any description...",
    },
  },
  definitions: {
    User: {
      id: 3,
      email: "hi@gmail.com",
      name: "bibek",
      role: "User",
      students: {
        type: Array,
        $ref: "#/definitions/Student",
        /// <reference path="" />
      },
    },
    Student: {
      id: 2,
      name: "Bibek Acharya",
      phoneNumber: null,
      address: "pokhara",
      marks: 300,
      createdAt: "2022-11-29T18:46:10.850Z",
      updatedAt: "2022-11-30T07:50:50.950Z",
      userId: null,
    },
  },
};

const outputFile = "./swagger-output.json";
const endpointsFiles = ["./src/app.ts"];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  require("./src/app"); // Your project's root file
});
