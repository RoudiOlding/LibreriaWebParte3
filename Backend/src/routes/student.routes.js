const Router = require("express");
const{
  getRegisterStudent,
  getUpdateStudent,
  getVisualiseStudent,
} = require("../controllers/student.controllers.js");

const studentRouter = Router();

studentRouter.post(
  "/api/student/getRegisterStudent",
  getRegisterStudent
);
studentRouter.put(
  "/api/student/getUpdateStudent",
  getUpdateStudent
);
studentRouter.get(
  "/api/student/getVisualiseStudent/:id",
  getVisualiseStudent
);
module.exports = studentRouter;