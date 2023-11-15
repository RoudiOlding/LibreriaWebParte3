module.exports = (sequelize, Sequelize) => {
    const Book = sequelize.define("Book", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      qualification: {
        type: Sequelize.STRING,
      },
      author: {
        type: Sequelize.STRING,
      },
      editorial: {
        type: Sequelize.STRING,
      },
      category: {
        type: Sequelize.STRING,
      },
      anio: {
        type: Sequelize.Date,
      },
      language: {
        type: Sequelize.STRING,
      },
      nropages: {
        type: Sequelize.INTEGER,
      },
      binding: {
        type: Sequelize.STRING,
      },
      isbn13: {
        type: Sequelize.INTEGER,
      },
      photobook: {
        type: Sequelize.STRING,
      },
      availability: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
    });
  
    return Book;
  };