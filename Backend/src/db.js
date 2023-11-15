const dbConfig = require("./config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.DIALECT,
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Storing models
const Models = {};
const Administrator = require("./models/administrator.model.js")(sequelize, Sequelize);
const Book = require("./models/book.model.js")(sequelize, Sequelize);
const Booking = require("./models/booking.model.js")(sequelize, Sequelize);
const ContenBookAdmin = require("./models/contenBookAdmin.model.js")(sequelize, Sequelize);
const Favorite = require("./models/favorite.model.js")(sequelize, Sequelize);
const Student = require("./models/student.model.js")(sequelize, Sequelize);

//Associations

Administrator.hasMany(ContenBookAdmin);
Book.hasMany(ContenBookAdmin);  

Student.hasMany(Booking);
Book.hasMany(Booking);  

Student.hasMany(Favorite);
Book.hasMany(Favorite); 

//Modelos
Models.Administrator=Administrator;
Models.Book=Book;
Models.Booking=Booking;
Models.ContenBookAdmin=ContenBookAdmin;
Models.Favorite=Favorite;
Models.Student=Student;

// Procedimientos almacenados

module.exports = { db, Models };
