module.exports = (sequelize, Sequelize) => {
    const Book = sequelize.define("Book", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      namebook: {
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
        defaultValue: false,
      },
      cont: {
        type: Sequelize.INTEGER,
      },
    
    });
  
    return Book;
  };
