const express = require("express");
const servConfig = require("./config/server-config.js");
const administratorRouter  = require("./routes/administrator .routes");
const studentRouter  = require("./routes/student.routes");

const server = () =>{
  const app = express();
  app.use(serverConfig);
  app.use(administratorRouter);
  app.use(studentRouter);
  const run = (port) => {
    app.listen(port);
  };
  const { db } = require("./db");
  db.sequelize
    .sync({ alter: false })
    .catch((err) => {
      console.log("Failed to sync db: " + err.message);
    });
  return {
      app,
      run,
    };
  };
module.exports = server;
