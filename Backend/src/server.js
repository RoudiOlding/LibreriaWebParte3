const express = require("express");
const servConfig = require("./config/server-config.js");
const administratorRouter  = require("./routes/administrator.routes.js");
const studentRouter  = require("./routes/student.routes.js");
const bookRouter = require ("./routes/book.routes.js");
const bookingRouter =require("./routes/booking.routes.js");
const favoriteRouter = require("./routes/favorite.routes.js")

const server = () =>{
  const app = express();
  app.use(serverConfig);
  app.use(administratorRouter);
  app.use(studentRouter);
  app.use(bookRouter);
  app.use(bookingRouter);
  app.use(favoriteRouter);

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
