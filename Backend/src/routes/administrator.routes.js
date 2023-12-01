const Router = require("express");
const{
  getRegisterAdministrator,
  getUpdateAdministrator,
  getVisualiseAdministrator,
} = require("../controllers/administrator.controllers.js");

const administratorRouter = Router();

administratorRouter.post(
  "/api/student/getRegisterAdministrator",
  getRegisterAdministrator
);
administratorRouter.put(
  "/api/student/getUpdateAdministrator",
  getUpdateAdministrator
);
administratorRouter.get(
  "/api/student/getVisualiseAdministrator/:id",
  getVisualiseAdministrator
);
module.exports = administratorRouter;
